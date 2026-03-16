import express from "express";
import { getProducts, getProductsInStock } from "../controllers/ProductsController";
import { getOrder, getOrders } from "../controllers/OrdersController";

export const routes = express.Router();

routes.get("/products", getProducts);
routes.get("/products/:id", getProductsInStock);


routes.get("/orders", getOrders);
routes.get("/orders/:id", getOrder);
