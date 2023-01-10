//public routes like homepage, login, register, etc.

//CREATING ROUTES

const express = require("express") //so the router can be extracted from express
const router = express.Router() //extracting the router

//route to get the homepage
router.get("/", (req, res) => {
    res.render("pages/homepage")
})

//route to get the login
router.get("/login", (req, res) => {
    res.render("pages/login")
})

//route to register
router.get("/register", (req, res) => {
    res.render("pages/register")
})

module.exports = router