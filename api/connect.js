import dotenv from 'dotenv';
dotenv.config();
import mysql from 'mysql';

const PASSWORD = process.env.PASSWORD;

const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: PASSWORD,
    database: "socialmedia_db"
});

export default db;