const db = require("./../config/connection");
const User = require("./../models/Users");
const userSeeds = require("./userSeeds.json");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  try {
    await cleanDB(User, "users");
    await User.create(userSeeds);
    console.log("Seed data successfully added to the database");
  } catch (error) {
    console.log(error);
  }
});
