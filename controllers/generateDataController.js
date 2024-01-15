const LeaderboardEntry = require("../models/LeaderBoardEntry");
const { faker } = require("@faker-js/faker");

module.exports = {
  generateEntries: async (req, res) => {
    try {
      const numEntries = 10000;
      const entries = [];

      for (let i = 0; i < numEntries; i++) {
        const uid = faker.string.uuid();
        const name = faker.internet.userName();
        const country = faker.location.country();
        const score = faker.number.int({ min: 0, max: 1000 });
        const timestamp = faker.date.between(faker.date.past(15), new Date());

        entries.push({
          UID: uid,
          Name: name,
          Score: score,
          Country: country,
          TimeStamp: timestamp,
        });
      }

      await LeaderboardEntry.insertMany(entries);

      res.json({ message: "Entries generated and added to database" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to generate entries" });
    }
  },
};
