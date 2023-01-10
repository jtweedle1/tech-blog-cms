//routes that must be logged in to access

//CREATING ROUTES

const express = require("express") //so the router can be extracted from express
const router = express.Router() //extracting the router

//route to get the homepage
router.get("/dashboard", (req, res) => {
    res.render("pages/dashboard")
})

module.exports = router