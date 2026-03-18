import { Request, Response } from "express";
import { getExampleData, getExampleData3 } from "../services/exampleService";
import { getAllProducts } from "../services/productService";

export async function getProducts(req: Request, res: Response) {
    const data = await getAllProducts();
    res.json(data);
}


export function getProductsInStock(req: Request, res: Response) {
    const id = req.params.id;
    const data = getExampleData3();
    res.json(data);
}

