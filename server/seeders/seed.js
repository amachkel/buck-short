const db = require("../config/connection");
const { User, BlogPost } = require("../models");
const userSeeds = require("./userSeeds.json");
const blogPostSeeds = require("./blogPostSeeds.json");

db.once("open", async () => {
  try {
    await BlogPost.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);
    await BlogPost.create(blogPostSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
