import express from "express";
import {
  createNewPoroduct,
  getAllProducts,
  getproduct,
} from "../controllers/product.controllers";
import { isAuthenticated } from "../middlewares/auth.middleware";
import { productCreateValidation } from "../middlewares/product.validation";

const router = express.Router();

router.post(
  "/product",
  isAuthenticated,
  productCreateValidation,
  createNewPoroduct
);
router.get("/product", getAllProducts);
router.get("/product/:productId", getproduct);

export default router;
