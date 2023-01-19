//here will be the database connection - using sequelize

//imports
const path = require("path")
require("dotenv").config({path: path.resolve(__dirname, '../.env')}); //invoking env so that process.env works
const Sequelize = require("sequelize")

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

sequelize.authenticate()
.then(() => {console.log("connected successfully")})
.catch((err) => {console.log(err)})

module.exports = sequelize