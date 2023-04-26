import express from "express";
import { getAllUsers, getUser } from "./../controllers/user.controller";
import { isAuthenticated } from "../middlewares/auth.middleware";

const router = express.Router();

router.get("/user", isAuthenticated, getUser);
router.get("/users", isAuthenticated, getAllUsers);
export default router;
