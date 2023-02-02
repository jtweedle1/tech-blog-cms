const { User } = require("../models")

const userData = [
    {
        "id": 101,
        "username": "JessWeatherbed",
        "password": "password1",
    },
    {
        "id": 102,
        "username": "MakenaKelly",
        "password": "password2",
    },
    {
        "id": 103,
        "username": "TomWarren",
        "password": "password3",
    },
    {
        "id": 104,
        "username": "JamesVincent",
        "password": "password4",
    },
    {
        "id": 105,
        "username": "IvanMehta",
        "password": "password5",
    }
  ]

const seedUsers = () => User.bulkCreate(userData)

module.exports = seedUsers