//to combine all our routing

//imports
const router = require("express").Router()
const public = require("./publicRoutes")
const dashboard = require("./dashboardRoutes") //dashboard.js
const posts = require("./postRoutes")


router.use(public)
router.use(dashboard)
router.use(posts)


router.use("*", (req, res) => {
    res.render("pages/404")
})


module.exports = router