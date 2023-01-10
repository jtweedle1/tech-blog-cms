//here will be the database connection - using sequelize

//imports
require("dotenv").config(); //invoking env so that process.env works
const Sequelize = require("sequelize")

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: "localhost",
    dialect: "mysql",
    port: 3306 //database port
});

module.exports = sequelize