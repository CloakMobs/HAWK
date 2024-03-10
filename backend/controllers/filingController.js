// Import the database pool
const pool = require('../config/database');

// Implement controller methods for CRUD operations on filings
exports.getAllFilings = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM filings');
    res.json(rows);
  } catch (error) {
    console.error('Error retrieving filings:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getFilingById = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query('SELECT * FROM filings WHERE id = $1', [id]);
    if (rows.length === 0) {
      res.status(404).json({ error: 'Filing not found' });
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    console.error('Error retrieving filing:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createFiling = async (req, res) => {
  const { institution, filingDate, holdings } = req.body;
  try {
    const { rows } = await pool.query(
      'INSERT INTO filings (institution, filing_date, holdings) VALUES ($1, $2, $3) RETURNING *',
      [institution, filingDate, holdings]
    );
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error('Error creating filing:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateFiling = async (req, res) => {
  const { id } = req.params;
  const { institution, filingDate, holdings } = req.body;
  try {
    const { rows } = await pool.query(
      'UPDATE filings SET institution = $1, filing_date = $2, holdings = $3 WHERE id = $4 RETURNING *',
      [institution, filingDate, holdings, id]
    );
    if (rows.length === 0) {
      res.status(404).json({ error: 'Filing not found' });
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    console.error('Error updating filing:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteFiling = async (req, res) => {
  const { id } = req.params;
  try {
    const { rowCount } = await pool.query('DELETE FROM filings WHERE id = $1', [id]);
    if (rowCount === 0) {
      res.status(404).json({ error: 'Filing not found' });
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    console.error('Error deleting filing:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};