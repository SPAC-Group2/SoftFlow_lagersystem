import { Request, Response } from "express";
import {ProductFilter, parseProductFilter} from "../utils/ProductFilters";
import { getAllProducts, GetPageNumber } from "../services/productService";

export async function getProducts(req: Request, res: Response) {

    const filters = parseProductFilter(req.query)
    const data = await getAllProducts(filters);

    res.json(data);
}


export async function getPageNumber(req: Request, res: Response) {
    
    const size = Number(req.query.pagesize);
    const data =  await GetPageNumber(size)
    res.json(data);
}

