// routes/leaderboardRoutes.js
const express = require('express');
const router = express.Router();
const leaderboardController = require('../controllers/leaderboardController');

router.get('/current-week', leaderboardController.getCurrentWeekLeaderboard);
router.get('/last-week/:country', leaderboardController.getLastWeekLeaderboard);
router.get('/all-countries', leaderboardController.getAllCountriesInLeaderboard);

module.exports = router;
