import { Request, Response } from "express";
import { getExampleData, getExampleData3 } from "../services/exampleService";
import {ProductFilter, parseProductFilter} from "../utils/ProductFilters";
import { getAllProducts } from "../services/productService";

export async function getProducts(req: Request, res: Response) {

    const filters = parseProductFilter(req.query)
    const data = await getAllProducts(filters);

    res.json(data);
}


export function getProductsInStock(req: Request, res: Response) {
    const id = req.params.id;
    const data = getExampleData3();
    res.json(data);
}

