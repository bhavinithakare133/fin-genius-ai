import { pool } from "./config/db";

console.log("DATABASE_URL:", process.env.DATABASE_URL);

const testConnection = async () => {
  try {
    const result = await pool.query("SELECT NOW()");
    console.log("Database Connected!");
    console.log(result.rows);
  } catch (error) {
    console.error(error);
  }
};

testConnection();