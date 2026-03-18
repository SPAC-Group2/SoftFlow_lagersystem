import { Request, Response } from "express";
import { getExampleData, getExampleData2, getExampleData3 } from "../services/exampleService";

export function getProducts(req: Request, res: Response) {
    const data = getExampleData();
    res.json(data);
}


export function getProductsInStock(req: Request, res: Response) {
    const id = req.params.id;
    const data = getExampleData2();
    const ProductSend = {data, id}
    res.json(ProductSend);
}

