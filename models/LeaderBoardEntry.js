const mongoose = require("mongoose");

const leaderboardEntrySchema = new mongoose.Schema({
  UID: { type: String, required: true },
  Name: { type: String, required: true },
  Score: { type: Number, required: true },
  Country: { type: String, required: true },
  TimeStamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("LeaderboardEntry", leaderboardEntrySchema);
