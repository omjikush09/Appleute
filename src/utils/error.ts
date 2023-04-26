import { type Response } from "express";

const errorFunction = (
  res: Response,
  error: string = "Something Went wrong",
  code: number = 501
): Response => {
  return res.status(code).json({ status: false, error });
};

export default errorFunction;
