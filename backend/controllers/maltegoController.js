// Import the database pool
const pool = require('../config/database');

// Implement controller methods for Maltego transforms
exports.filingToInstitution = async (req, res) => {
  const { filingId } = req.query;
  try {
    const { rows } = await pool.query(
      'SELECT * FROM institutions WHERE id = (SELECT institution_id FROM filings WHERE id = $1)',
      [filingId]
    );
    if (rows.length === 0) {
      res.status(404).json({ error: 'Institution not found' });
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    console.error('Error retrieving institution:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.institutionToSecurities = async (req, res) => {
  const { institutionId } = req.query;
  try {
    const { rows } = await pool.query(
      'SELECT * FROM securities WHERE institution_id = $1',
      [institutionId]
    );
    res.json(rows);
  } catch (error) {
    console.error('Error retrieving securities:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};