import { count } from 'node:console';
import pool from '../db/db_module'; 
//import {Product} from "@shared/types";
import {mapToProductList} from "../shared/mappers/ProductMapper";
import { ProductFilter } from '../utils/ProductFilters';


export async function getAllProducts(filters : ProductFilter) {
  let query = 'SELECT * FROM GetProducts';
  console.log(filters.instock)
  const conditions: string[] = [];
  const values: any[] = [];
  if(filters.category !== undefined){
    values.push(filters.category)
    conditions.push(`category ILIKE $${values.length}`) 
  }
  if (filters.instock !== undefined){
    console.log(filters.instock)
    if(filters.instock == false){
      conditions.push("stock <= 0")
    }
    else{
      conditions.push("stock >= 1")
    }
  }
    if (conditions.length > 0) {
      query += " WHERE " + conditions.join(" AND ");
    }
  if (filters.page !== undefined){
    if(filters.page < 1){
      filters.page = 1;
    }
    if(filters.pagesize == undefined || filters.pagesize < 1){
      filters.pagesize = 10;
    }
    const OFFSET = (filters.page - 1) * filters.pagesize 
    query += " LIMIT " + filters.pagesize + " OFFSET " + OFFSET;
  }

  try {
    const result = await pool.query(query, values);
    
    return mapToProductList(result.rows);
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
}

export async function GetPageNumber(pagesize: number) {

  const query = "SELECT count(*) FROM GetProducts;"
  try {
    const tablelength = await pool.query(query);
    const nu = tablelength.rows.map(row => row.count)
    const result = Math.ceil(Number(nu[0])/pagesize);
    return result;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
}