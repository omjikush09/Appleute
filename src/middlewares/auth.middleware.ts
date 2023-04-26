import { type NextFunction, type Response } from "express";
import { JWT_SECRET } from "../config/config.keys";
import errorFunction from "./../utils/error";
import jwt from "jsonwebtoken";
import { type IGetUserAuthInfoRequest } from "../types";

export const isAuthenticated = async (
  req: IGetUserAuthInfoRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.headers.authorization === null) {
    return errorFunction(res, "Unauthorized", 401);
  }
  if (req.headers.authorization?.startsWith("Bearer ") !== null) {
    const authorizationHeader = req.headers.authorization;

    if (authorizationHeader !== undefined) {
      const token = authorizationHeader.substring(
        7,
        authorizationHeader?.length
      );
      jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err != null) {
          return errorFunction(res, "Unauthorized", 401);
        }
        if (decoded !== undefined && typeof decoded !== "string") {
          const { userId } = decoded;
          req.auth = { userId: Number(userId) };
          next();
        }
      });
    }
  } else {
    return errorFunction(res, "Unauthorized", 401);
  }
};
