//Routes for posts
const router = require("express").Router();
const { Post, User } = require("../models");

//Search by genre function - GET all genres
router.get("/posts", async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [{ model: User, model: Comment }],
    });
    const posts = dbPostData.map((post) => post.get({ plain: true }));

    res.render("pages/posts", { posts, loggedIn: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

// //GET individual genre and show all associated artists
//     //include User (name)
router.get("/posts/:id", async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id, {
        include: [{ model: User, attributes: ["id","username"] }],
      });
    const post = dbPostData.get({ plain: true })
    res.render("pages/postdetails", { post });
    console.log(dbPostData)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
