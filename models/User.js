const { DataTypes, Model } = require("sequelize")
const sequelize = require("../config/db")
const bcrypt = require("bcrypt")

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init({
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    }
  }, {
    // Other model options go here
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
    sequelize, // We need to pass the connection instance
    modelName: 'user', // We need to choose the model name
    tableName: 'user',
    timestamps: true, //timestamps automatically created
  });

  module.exports = User