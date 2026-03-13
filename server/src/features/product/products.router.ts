import express from "express";
import { getProducts } from "./products.service";

export const productRouter = express.Router();

productRouter.get("/", async (req: any, res: { json: (arg0: string) => void; }) => {
  const products = await getProducts();
  /*if (req.headers["accept"] == "application/xml") {
    const root = create().ele("customers");
    customers.forEach((i) => {
      root.ele("customer", i);
    });

    res.status(200).send(root.end({ prettyPrint: true }));
  } else {
    res.json(customers);
  }*/
 res.json(products);
});