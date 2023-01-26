//routes that must be logged in to access

//CREATING ROUTES

const express = require("express") //so the router can be extracted from express
const router = express.Router() //extracting the router
const { User, Post } = require("../models")

//route to get the homepage

router.get("/dashboard", async (req, res) => {
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
        res.render("pages/dashboard", { posts })
    } catch {

    }
})

module.exports = router