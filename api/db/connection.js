require('dotenv').config();
// PG database client/connection setup
require('dotenv').config();

const { Pool } = require('pg');

const dbParams = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
};

console.log('.env parameter check', dbParams);

const db = new Pool(dbParams);

db.connect();

module.exports = db;
