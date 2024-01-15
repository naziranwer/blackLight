// routes/generateDataRoutes.js
const express = require('express');
const router = express.Router();
const generateDataController = require('../controllers/generateDataController');

router.post('/generate-entries', generateDataController.generateEntries);

module.exports = router;
