// controllers/userController.js
const LeaderboardEntry = require('../models/LeaderBoardEntry');

module.exports = {
  getUserRank: async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await LeaderboardEntry.findOne({ UID: userId });

      if (!user) {
        res.status(404).json({ error: 'User not found' });
        return;
      }

      const userRank = await LeaderboardEntry
        .find({ Score: { $gt: user.Score } })
        .countDocuments() + 1;

      res.json({ userId: user.UID, rank: userRank });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};
