//public routes like homepage, login, register, etc.

//imports
const express = require("express") //so the router can be extracted from express
const router = express.Router() //extracting the router
const { User, Post } = require("../models")

//HOMEPAGE ROUTES
router.get("/", async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        const posts = postData.map((post) => post.get({plain: true}))
        console.log(posts)
        res.render("pages/homepage", { posts })
    } catch {

    }
})

//LOGIN ROUTES
router.get("/login", (req, res) => {
    res.render("pages/login")
})

//REGISTRATION ROUTES
router.get("/register", (req, res) => {
    res.render("pages/register")
})

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

module.exports = router