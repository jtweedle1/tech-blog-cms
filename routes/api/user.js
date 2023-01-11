const router = require("express").Router()
const { User } = require("../../models")

//creating first route - registration route

router.post("/register", (req, res) => {
    //destructuring the request body
    const { username, password } = req.body //taking the values out
    //simple validation of user inputs
    if (!username || !password) {
        return res.status(400).json({message: "username and password required"})
    }
    //this process is asynchronous
    User.create({username, password})
    .then((user) => {
        
    })
    .catch((error) => {res.status(500).json({message: "internal server error, try again later"})})
})