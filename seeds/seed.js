const sequelize = require('../config/db');
const { User, Post, Comment } = require('../models/');
const path = require("path")
require("dotenv").config({ path: path.resolve(__dirname, '../.env') }); //invoking env so that process.env works
const seedUsers = require('./userSeed');
const seedPosts = require('./postSeed');
const seedComments = require('./commentSeed')

const seedData = async () => {
  await sequelize.sync({ force: true });
  await seedUsers({
    individualHooks: true,
    returning: true
  });
  await seedPosts();
  await seedComments();
  console.log('Seeded!');
  process.exit(0);
};

seedData();