const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

if(!connection) {
    console.log('Error connecting to database');
    return;
} else {
    console.log('Connected to database');
}   

module.exports = connection;