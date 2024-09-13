// mortgageRoutes.js

const express = require('express');
const router = express.Router();
const { calculateMortgagePayment } = require('../controllers/mortgageController');

// POST route for calculating mortgage
router.post('/calculateMortgage', calculateMortgagePayment);

module.exports = router;
