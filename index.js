const express = require("express");
const app = express();
require("dotenv").config();
const leaderboardRoutes = require('./routes/leaderboardRoutes');
const userRoutes = require('./routes/userRoutes');
const generateDataRoutes = require('./routes/generateDataRoutes');

const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

require("./config/database").connect();

// const user = require("./routes/user");

app.get("/",(req,res)=>{
  res.send("Welcome to my Page Follow the Readme file and use it");
})
app.use('/leaderboard', leaderboardRoutes);
app.use('/user', userRoutes);
app.use('/generate-data', generateDataRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT} port`);
});
