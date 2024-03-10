// Import required modules
const express = require('express');
const router = express.Router();

// Import controller
const filingController = require('../controllers/filingController');

// Define routes for CRUD operations on filings
router.get('/', filingController.getAllFilings);
router.get('/:id', filingController.getFilingById);
router.post('/', filingController.createFiling);
router.put('/:id', filingController.updateFiling);
router.delete('/:id', filingController.deleteFiling);

module.exports = router;