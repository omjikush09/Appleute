import express from "express";
import {
  createNewCategory,
  getAllCategories,
} from "../controllers/category.controllers";

import { isAuthenticated } from "../middlewares/auth.middleware";

const router = express.Router();

router.post("/category/", isAuthenticated, createNewCategory);
router.get("/category/", getAllCategories);

export default router;
