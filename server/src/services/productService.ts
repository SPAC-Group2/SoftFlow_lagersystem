import pool from '../db/db_module'; 
//import {Product} from "@shared/types";
import {mapToProductList} from "../shared/mappers/ProductMapper";


export async function getAllProducts() {
  const query = 'SELECT * FROM GetProducts';
  try {
    const result = await pool.query(query);
    return mapToProductList(result.rows);
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
}

export async function getProductsFromDBByPage(take: number, skip: number) {
  const query = 'SELECT * FROM ProductsView LIMIT  $1  OFFSET $2;';
  const values = [take, skip]
  try {
    const result = await pool.query(query, values);
    return result.rows;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }}