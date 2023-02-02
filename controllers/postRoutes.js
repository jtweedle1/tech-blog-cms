//Routes for posts
const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

//Search by genre function - GET all genres
router.get("/posts", async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [{ model: User, model: Comment }],
    });
    const posts = dbPostData.map((post) => post.get({ plain: true }));

    res.render("pages/posts", { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

// //GET individual genre and show all associated artists
//     //include User (name)
router.get("/posts/:id", async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id, {
        include: [
          { model: User, attributes: ['id','username'] }, 
          { model: Comment, attributes: ['id', 'content', 'post_id', 'user_id'], include: { model: User, attributes: ['username']}}
      ],
      });
    const post = dbPostData.get({ plain: true })
    res.render("pages/postdetails", { post, loggedIn: req.session.loggedIn });
    console.log(dbPostData)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/posts/:id", withAuth, async (req, res) => {
  try {
    const dbCommentData = await Comment.findByPk(req.params.id, {
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
