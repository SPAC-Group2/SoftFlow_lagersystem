import { Request, Response } from "express";
import { getAllCategories } from "../services/categoriesService";

export async function getCategories(req: Request, res: Response) {

    
    const data = await getAllCategories();

    res.json(data);
}
