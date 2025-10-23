import mysql from "mysql2/promise";
export const db = await mysql.createPool({
    host: process.env.DB_HOST, // Replace with your DB host
    user: process.env.DB_USER, // Replace with your DB user
    password: process.env.DB_PASSWORD, // Replace with your DB password
    database: process.env.DB_NAME, // Replace with your DB name  
});