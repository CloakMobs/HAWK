// Import required modules
const express = require('express');
const router = express.Router();

// Import controller
const maltegoController = require('../controllers/maltegoController');

// Define routes for Maltego transforms
router.get('/filing-to-institution', maltegoController.filingToInstitution);
router.get('/institution-to-securities', maltegoController.institutionToSecurities);

module.exports = router;