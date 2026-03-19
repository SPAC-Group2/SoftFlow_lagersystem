import pool from '../db/db_module'; 

export async function getAllCategories() {
  
  const query = 'SELECT category FROM Categories';
  try {
    const result = await pool.query(query);
    const categories = result.rows.map(row => row.category);
    return categories;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
}