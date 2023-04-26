import { type Request } from "express";
export interface IGetUserAuthInfoRequest extends Request {
  auth?: { userId: number }; // or any other type
}
