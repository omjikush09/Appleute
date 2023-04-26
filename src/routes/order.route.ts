import express from "express";
import { isAuthenticated } from "../middlewares/auth.middleware";

import {
  createNewOrder,
  getAllOrderByUser,
  getOrderByIdController,
} from "../controllers/order.contorller";

const router = express.Router();

router.get("/order/:orderId", isAuthenticated, getOrderByIdController);
router.get("/orders/:userId", isAuthenticated, getAllOrderByUser);

router.post("/order/:cartId", isAuthenticated, createNewOrder);

export default router;
