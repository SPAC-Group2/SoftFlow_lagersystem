import express from "express";
import { productRouter } from "./product/products.router";

const apiRouter = express.Router();

apiRouter.use("/products", productRouter);

export const routes = express.Router();

routes.use("/api", apiRouter);

routes.get("/", (req, res) => {
  res.status(200).send("<h1>Server is ready!</h1>");
});
