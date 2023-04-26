import { type Request, type Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config.keys";
import errorFunction from "./../utils/error";
import { getUserByEmail, createNewUser } from "../repository/user.repository";
import { createCart } from "../repository/cart.repository";

// Hash Password
const hashPassward = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassward = await bcrypt.hash(password, salt);
  return hashedPassward;
};

// Create JWT
const generateJWT = async (id: string) => {
  return jwt.sign(
    {
      userId: id,
    },
    JWT_SECRET,
    { expiresIn: "40h" }
  );
};

// Create New User
export const createUser = async (req: Request, res: Response) => {
  const user: { email: string; username: string; password: string } = req.body;

  try {
    const userData = await getUserByEmail(user?.email);
    if (userData !== null) {
      return errorFunction(res, "User Already Exist", 400);
    }
    try {
      user.password = await hashPassward(user?.password);
      // Call to Database
      const createdUser = await createNewUser(user);
      // Create Cart
      await createCart(createdUser.id);

      const jwtToken = await generateJWT(String(createdUser.id));

      return res.status(200).json({
        status: true,
        jwtToken,
        user: createdUser,
      });
    } catch (error) {
      return errorFunction(res, "Something went wrong...", 400);
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      status: false,
      error: "Something went wrong...",
    });
  }
};

// Login User
export const loginUser = async (req: Request, res: Response) => {
  const user = req.body;
  try {
    const userData = await getUserByEmail(user?.email);
    if (userData !== null) {
      const validPassword = await bcrypt.compare(
        user.password,
        userData.password
      );
      if (validPassword) {
        const jwtToken = await generateJWT(String(userData.id));
        userData.password=""
        return res.json({
          status: true,
          jwtToken,
          user:userData
        });
      } else {
        return errorFunction(res, "User and Password Deos not match", 400);
      }
    } else {
      return errorFunction(res, "User deos not exist", 400);
    }
  } catch (error) {
    return errorFunction(res, "Something went wrong", 502);
  }
};
