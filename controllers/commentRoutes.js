//Routes for posts
const router = require("express").Router();
const { Post, User, Comment } = require("../models");

router.post('/posts/:id/', async (req, res) => {
    try {
    const { content } = req.body
    const post_id = req.params.id
    const user_id = req.session.user_id
    const newComment = await Comment.create({
        content,
        user_id, 
        post_id
    })
    res.render("/posts/:id/")
    } catch (err) {
        console.log(err);
    }
})