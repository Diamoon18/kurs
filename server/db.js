import mysql from "mysql";

export const db = mysql.createConnection({
    host: '127.0.0.1',
    database: 'course',
    user: 'root',
    password: 'root1234',
    port: '3306'
});