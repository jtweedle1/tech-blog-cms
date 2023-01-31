

//CREATING ROUTES
const express = require("express") //so the router can be extracted from express
const router = express.Router() //extracting the router
const { User, Post } = require("../models")
const withAuth = require("../utils/auth");
const uploadImage = require("../cloudinary_upload/uploadimage")

//route to get the dashboard
router.get("/dashboard", withAuth, async (req, res) => {
    try {
        //sending Post and User data
        const dashboardData = await Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        const posts = dashboardData.map((post) => post.get({plain: true}))
        res.render("pages/dashboard", { posts, loggedIn: req.session.loggedIn, jsFile: "dashboard.js", user_id: req.session.user_id })
    } catch(err) {
        res.status(500).json(err);
    }
})

router.post("/dashboard", async (req, res) => {
    try {
      const { title, content, image } = req.body;
      const user_id = req.session.user_id;
      const post_image = uploadImage(image)
      .then(async (url) => {
        const newPost = await Post.create({
          title,
          content,
          user_id,
          image: url.secure_url,
        });
       res.redirect("/");
      }).catch((error) => console.log(error));
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

module.exports = router