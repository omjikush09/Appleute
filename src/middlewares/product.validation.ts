import { createProductSchema } from "../validators/product.validator";
import errorFunction from "../utils/error";
import { type Response, type NextFunction } from "express";
import { type IGetUserAuthInfoRequest } from "../types";
export const productCreateValidation = async (
  req: IGetUserAuthInfoRequest,
  res: Response,
  next: NextFunction
) => {
  const payload = req.body;
  const { error } = createProductSchema.validate(payload);
  if (error != null) {
    return errorFunction(
      res,
      `Error in User Data ${error?.message} `
    );
  } else {
    next();
  }
};
