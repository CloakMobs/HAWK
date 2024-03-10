// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

// Import routes
const filingRoutes = require('./routes/filings');
const maltegoRoutes = require('./routes/maltego');

// Create Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Create a new PostgreSQL pool
const pool = new Pool({
  // Configure the database connection settings
  // e.g., database, host, port, user, password
});

// Test the database connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
  }
});

// Routes
app.use('/api/filings', filingRoutes);
app.use('/api/maltego', maltegoRoutes);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});