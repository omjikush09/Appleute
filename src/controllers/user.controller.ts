import { type Response } from "express";
import { type IGetUserAuthInfoRequest } from "../types";
import { getAllUser, getUserById } from "../repository/user.repository";
import errorFunction from "./../utils/error";

export const getUser = async (req: IGetUserAuthInfoRequest, res: Response) => {
  // let userId;
  if (req?.auth === undefined) {
    errorFunction(res, "unauthorised", 401);
    return;
  }

  const { userId } = req?.auth;

  try {
    const data = await getUserById(userId);

    return res.status(200).json({
      status: true,
      data,
    });
  } catch (error) {
    errorFunction(res, "Something went wrong", 501);
  }
};

export const getAllUsers = async (
  req: IGetUserAuthInfoRequest,
  res: Response
) => {
  // let userId;
  if (req?.auth === undefined) {
    errorFunction(res, "unauthorised", 401);
    return;
  }

  try {
    const data = await getAllUser();
    return res.status(200).json({
      status: true,
      data,
    });
  } catch (error) {
    errorFunction(res, "Something went wrong", 501);
  }
};
