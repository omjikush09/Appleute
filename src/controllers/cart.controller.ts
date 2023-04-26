import { type IGetUserAuthInfoRequest } from "../types";
import { type Response } from "express";
import errorFunction from "../utils/error";
import {
  addItemsToCart,
  addItemToCart,
  getCartByUserId,
  removeItemFromCart,
} from "../repository/cart.repository";

export const addToCart = async (
  req: IGetUserAuthInfoRequest,
  res: Response
) => {
  // let userId;
  if (req?.auth === undefined) {
    errorFunction(res, "unauthorised", 401);
    return;
  }
  const { cartId } = req.params;
  const { product } = req.body;
  try {
    const data = await addItemToCart(Number(cartId), product);
    return res.status(200).json({
      status: true,
      data,
    });
  } catch (error) {
    console.log(error);

    errorFunction(res, "Something went wrong ", 400);
  }
};

export const addMultipleItemToCart = async (
  req: IGetUserAuthInfoRequest,
  res: Response
) => {
  const { cartId } = req.params;
  const { products } = req.body;
  try {
    const data = await addItemsToCart(Number(cartId), products);
    return res.status(200).json({
      status: true,
      data,
    });
  } catch (error) {
    console.log(error);

    errorFunction(res, "Something went wrong", 400);
  }
};

export const getCart = async (req: IGetUserAuthInfoRequest, res: Response) => {
  const { userId } = req.params;

  try {
    const data = await getCartByUserId(Number(userId));
    return res.status(200).json({
      status: true,
      data,
    });
  } catch (error) {
    console.log(error);

    errorFunction(res, "Something went wrong", 400);
  }
};

export const removeItemCart = async (
  req: IGetUserAuthInfoRequest,
  res: Response
) => {
  const { cartId } = req.params;
  const { productId } = req.body;

  try {
    const data = await removeItemFromCart(Number(cartId), productId);
    return res.status(200).json({
      status: true,
      data,
    });
  } catch (error) {
    console.log(error);

    errorFunction(res, "Something went wrong", 400);
  }
};
