import { Request, Response } from "express";
import { getExampleData, getExampleData3 } from "../services/exampleService";

export function getProducts(req: Request, res: Response) {
    const data = getExampleData();
    res.json(data);
}


export function getProductsInStock(req: Request, res: Response) {
    const id = req.params.id;
    const data = getExampleData3();
    res.json(data);
}

