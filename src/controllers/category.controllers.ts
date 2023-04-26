import { type IGetUserAuthInfoRequest } from "../types";
import { type Response } from "express";
import errorFunction from "../utils/error";
import {
  createCategory,
  getAllCategory,
} from "../repository/category.repository";

export const createNewCategory = async (
  req: IGetUserAuthInfoRequest,
  res: Response
) => {
  // let userId;
  if (req?.auth === undefined) {
    errorFunction(res, "unauthorised", 401);
    return;
  }
  const category = req.body;
  try {
    const data = await createCategory(category);
    return res.status(200).json({
      status: true,
      data: { id: data?.id },
    });
  } catch (error) {
    console.log(error);

    errorFunction(res, "Something went wrong or category already exist", 501);
  }
};

export const getAllCategories = async (
  req: IGetUserAuthInfoRequest,
  res: Response
) => {
  try {
    const data = await getAllCategory();
    return res.status(200).json({
      status: true,
      data,
    });
  } catch (error) {
    console.log(error);

    errorFunction(res, "Something went wrong", 501);
  }
};
