const { DataTypes, Model } = require("sequelize")
const sequelize = require("../config/db")

class Comment extends Model {}

Comment.init({
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'User',
            key: 'id'
        }
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Post',
            key: 'id'
        }
    }
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'comment', // We need to choose the model name
    tableName: 'comment',
    timestamps: true, //timestamps automatically created
    underscored: true
  });

  module.exports = Comment