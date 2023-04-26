import { type IGetUserAuthInfoRequest } from "../types";
import { type Response } from "express";
import errorFunction from "../utils/error";
import {
  createOrder,
  getOrderById,
  getOrdersByUserId,
} from "../repository/order.repository";

export const createNewOrder = async (
  req: IGetUserAuthInfoRequest,
  res: Response
) => {
  // let userId;
  if (req?.auth === undefined) {
    errorFunction(res, "unauthorised", 401);
    return;
  }
  const { cartId } = req.params;
  try {
    const data = await createOrder(Number(cartId));
    return res.status(200).json({
      status: true,
      data,
    });
  } catch (error) {
    console.log(error);

    errorFunction(res, "Something went wrong ", 400);
  }
};

export const getOrderByIdController = async (
  req: IGetUserAuthInfoRequest,
  res: Response
) => {
  const { orderId } = req.params;
  try {
    const data = await getOrderById(Number(orderId));
    return res.status(200).json({
      status: true,
      data,
    });
  } catch (error) {
    console.log(error);

    errorFunction(res, "Something went wrong", 400);
  }
};

export const getAllOrderByUser = async (
  req: IGetUserAuthInfoRequest,
  res: Response
) => {
  const { userId } = req.params;

  try {
    const data = await getOrdersByUserId(Number(userId));
    return res.status(200).json({
      status: true,
      data,
    });
  } catch (error) {
    console.log(error);

    errorFunction(res, "Something went wrong", 400);
  }
};
