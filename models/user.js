const { DataTypes, Model } = require("sequelize")
const sequelize = require("../config/db")

class User extends Model {}

User.init({
    // Model attributes are defined here
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      }
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User', // We need to choose the model name
    timestamps: true, //timestamps automatically created
    underscored: true //instead of camel case
  });

  module.exports = User