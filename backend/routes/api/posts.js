const express = require("express");
const asyncHandler = require("express-async-handler");
const { User, Post, Comment} = require("../../db/models");
const { singleMulterUpload, singlePublicFileUpload } = require("../../aws3");
const router = express.Router();


// Get all posts
router.get(
  "/",
  asyncHandler(async (req, res) => {

    const posts = await Post.findAll({include: Comment});

    return res.json({posts: posts});
  })
);

// Get all comments
router.get(
  "/",
  asyncHandler(async (req, res) => {

    const comments = await Comment.findAll();
    console.log(comment)
    return res.json({comments: comments});
  })
);

// Create a post
router.post(
  "/",
  singleMulterUpload("image"),
  asyncHandler(async (req, res) => {
    const {caption, userId} = req.body;
    console.log(req.body)
    const url = await singlePublicFileUpload(req.file);
    const post = await Post.create({
      caption: caption,
      userId: userId,
      picture: url
    });

    // setTokenCookie(res, photo);

    return res.json({
    post
    });
  })
);

// comment on post
router.post(
  "/comments/:userId",
  asyncHandler(async (req, res) => {
    //  const userId = req.params.userId;
    
    const { userId, comm, postId } = req.body;
    
    console.log(req.body)

    const comment = await Comment.create({
      userId,
      postId,
      comment: comm,
    });
    return res.json({comment: comment});
  })
);


// Vote on post
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