const { Pool } = require('pg');

// Configure the database connection settings
const pool = new Pool({
  database: 'your_database_name',
  host: 'localhost',
  port: 5432,
  user: 'your_username',
  password: 'your_password',
});

module.exports = pool;