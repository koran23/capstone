const express = require("express");
const asyncHandler = require("express-async-handler");
const { User, Post} = require("../../db/models");
const router = express.Router();


// Get all posts
router.get(
  "/",
  asyncHandler(async (req, res) => {

    const posts = await Post.findAll();

    return res.json(posts);
  })
);

// Create a post
router.post(
  "/:id",
  asyncHandler(async (req, res) => {
    const { userId, picture, caption } = req.body;

    const post = await Post.create({ userId, picture, caption })
    res.json({post: post});
  })
);

// Vote on photo
router.patch(
  '/:id',
  asyncHandler(async (req, res, next) => {
    const userId = req.params.id;
    const post = await Post.findOne(userId);

    if (post) {
      await post.update({ 
          vote: req.body.vote,
        });
      res.json({ vote });
    } else {
      res.status(400).json({msg: 'you already voted'})
    }
  })
);


module.exports = router;