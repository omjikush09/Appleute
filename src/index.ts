import express from "express";
import * as dotenv from "dotenv";
import { PORT } from "./config/config.keys";

// Router
import authRouter from "./routes/auth.route";
import userRouter from "./routes/user.route";
import postRouter from "./routes/product.route";
import categoryRouter from "./routes/category.route";
import cartRouter from "./routes/cart.route";
import orderRouter from "./routes/order.route";
dotenv.config();
const app = express();

// regular middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/", authRouter);
app.use("/api/", userRouter);
app.use("/api/", postRouter);
app.use("/api/", categoryRouter);
app.use("/api/", orderRouter);
app.use("/api/", cartRouter);

export default app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`);
});

process.on("uncaughtException", (err) => {
  console.log("UnCaughtException");

  console.log(err);
});
