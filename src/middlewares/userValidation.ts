import { type Request, type Response, type NextFunction } from "express";
import errorFunction from "../utils/error";
import { loginSchema, registerUserSchema } from "../validators/auth.validator";

// User Create Validation
export const userCreateValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const payload = req.body;
  const { error } = registerUserSchema.validate(payload);
  if (error != null) {
    return errorFunction(res, `Error in User Data ${error.message}`);
  } else {
    next();
  }
};

// User Login Validation
export const userLoginValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const payload = req.body;
  const { error } = loginSchema.validate(payload);
  if (error != null) {
    return errorFunction(res, `Error in User Data ${error.message}`);
  } else {
    next();
  }
};
