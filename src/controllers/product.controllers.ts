import { type Response } from "express";
import {
  createProduct,
  getAllProduct,
  getproductById,
} from "../repository/product.repository";
import { type IGetUserAuthInfoRequest } from "../types";
import errorFunction from "../utils/error";

export const createNewPoroduct = async (
  req: IGetUserAuthInfoRequest,
  res: Response
) => {
  const { categoryId, ...product } = req.body;
  try {
    const { updatedAt, ...data } = await createProduct(categoryId, product);
    return res.status(200).json({
      status: true,
      data,
    });
  } catch (error) {
    errorFunction(res, "Something went wr ong or category deos not exist", 501);
  }
};

export const getproduct = async (
  req: IGetUserAuthInfoRequest,
  res: Response
) => {
  const { productId } = req.params;

  try {
    const data = await getproductById(Number(productId));
    return res.status(200).json({
      status: true,

      data,
    });
  } catch (error) {
    errorFunction(res, "Product not found", 500);
  }
};

export const getAllProducts = async (
  req: IGetUserAuthInfoRequest,
  res: Response
) => {
  try {
    const data = await getAllProduct();
    return res.status(200).json({
      status: true,
      data,
    });
  } catch (error) {
    errorFunction(res, "Something went wrong", 501);
  }
};
