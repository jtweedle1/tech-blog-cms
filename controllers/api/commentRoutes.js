//Routes for posts
const router = require("express").Router();
const { Post, User, Comment } = require("../../models");

router.post('/', async (req, res) => {
    try {
    const { content, post_id } = req.body
    const user_id = req.session.user_id
    const newComment = await Comment.create({
        content,
        user_id, 
        post_id
    })
    res.redirect("/")
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;