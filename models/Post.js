const { DataTypes, Model } = require("sequelize")
const sequelize = require("../config/db")
const User = require("./User")

class Post extends Model {}

Post.init({
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'User',
            key: 'id'
        }
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Post', // We need to choose the model name
    tableName: 'post',
    timestamps: true, //timestamps automatically created
    underscored: true
  });

  module.exports = Post