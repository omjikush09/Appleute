import express from "express";
import { isAuthenticated } from "../middlewares/auth.middleware";
import {
  addMultipleItemToCart,
  addToCart,
  getCart,
  removeItemCart,
} from "../controllers/cart.controller";

const router = express.Router();

router.get("/cart/:userId", isAuthenticated, getCart);
// Add to cart
router.post("/cart/:cartId", isAuthenticated, addToCart);
router.post(
  "/cart/addMultiple/:cartId",
  isAuthenticated,
  addMultipleItemToCart
);

router.delete("/cart/:cartId", isAuthenticated, removeItemCart);

export default router;
