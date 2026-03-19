import express from "express";
import { getPageNumber, getProducts } from "../controllers/ProductsController";
import { getCategories } from "../controllers/CategoriesController";
import { getOrder, getOrders } from "../controllers/OrdersController";

export const routes = express.Router();

routes.get("/products", getProducts);
routes.get("/products/pages", getPageNumber)
routes.get("/categories", getCategories);



routes.get("/orders", getOrders);
routes.get("/orders/:id", getOrder);
