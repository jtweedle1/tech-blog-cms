//to combine all our routing

//imports
const router = require("express").Router()
const public = require("./public")
const dashboard = require("./dashboard") //dashboard.js


router.use("/", public)
router.use(dashboard)


router.use("*", (req, res) => {
    res.render("pages/404")
})


module.exports = router