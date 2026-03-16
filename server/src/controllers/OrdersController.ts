import { Request, Response } from "express";
import { getExampleData2 } from "../services/exampleService";

export function getOrders(req: Request, res: Response) {
    
    const data = getExampleData2();
    res.json(data);
}

export function getOrder(req: Request, res: Response) {
    const id = req.params.id;
    const data = getExampleData2();
    res.json(id);
}

