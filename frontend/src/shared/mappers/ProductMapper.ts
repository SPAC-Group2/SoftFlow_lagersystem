import type { Product } from "../types/Product";

export const mapToProduct = (data: any): Product => ({
  id: data.id ?? data.public_id,
  name: data.name,
  description: data.description,
  price: data.price,
  stock: data.stock,
  category: data.category
});

export const mapToProductList = (dataArray: any[]): Product[] =>
  dataArray.map(mapToProduct);