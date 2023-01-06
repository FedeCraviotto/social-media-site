import mysql from 'mysql';
import dotenv from 'dotenv';
dotenv.config();

const PASSWORD = process.env.PASSWORD;

const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: PASSWORD,
    database: "socialmedia_db"
});

export default db;