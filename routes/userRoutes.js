// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/rank/:userId', userController.getUserRank);

module.exports = router;
