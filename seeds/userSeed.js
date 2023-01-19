const { User } = require("../models")

const userData = [
    {
        "id": 101,
        "username": "FallGuysOfficial",
        "password": "password1",
    },
    {
        "id": 102,
        "username": "SadBoisOfficial",
        "password": "password2",
    },
    {
        "id": 103,
        "username": "NiceBoys",
        "password": "password3",
    }
  ]

const seedUsers = () => User.bulkCreate(userData)

module.exports = seedUsers