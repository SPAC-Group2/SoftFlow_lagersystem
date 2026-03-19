import pool from '../db/db_module'; 

export async function getAllCategories() {
  
  const query = 'SELECT * FROM Categories';
  try {
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
}