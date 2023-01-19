//to combine all our routing

//imports
const router = require("express").Router()
const public = require("./publicRoutes")
const dashboard = require("./dashboardRoutes") //dashboard.js


router.use("/", public)
router.use(dashboard)


router.use("*", (req, res) => {
    res.render("pages/404")
})


module.exports = router