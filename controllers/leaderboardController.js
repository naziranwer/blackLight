// controllers/leaderboardController.js
const LeaderboardEntry = require('../models/LeaderBoardEntry');

module.exports = {
  getCurrentWeekLeaderboard: async (req, res) => {
    try {
      const today = new Date();
      const startOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay());
      console.log('Start of Last Week:', startOfWeek);
      console.log('Today:', new Date());

      const currentWeekLeaderboard = await LeaderboardEntry
        .find({ TimeStamp: { $gte: startOfWeek } })
        .sort({ Score: -1 })
        .limit(200);

      res.json(currentWeekLeaderboard);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getLastWeekLeaderboard: async (req, res) => {
    try {
      const { country } = req.params;
      const today = new Date();
      const startOfLastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() - 6);
      const endOfLastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay());
  
      console.log('Start of Last Week:', startOfLastWeek);
      console.log('end of last week', endOfLastWeek);
  
      const lastWeekLeaderboard = await LeaderboardEntry
        .find({
          Country: country,
          TimeStamp: { $gte: startOfLastWeek, $lt: endOfLastWeek },
        })
        .sort({ Score: -1 })
        .limit(200);
  
      // console.log('Last Week Leaderboard:', lastWeekLeaderboard);
  
      res.json(lastWeekLeaderboard);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  
};
