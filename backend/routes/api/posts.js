const express = require("express");
const asyncHandler = require("express-async-handler");
const { User, Post, Comment, Vote} = require("../../db/models");
const { singleMulterUpload, singlePublicFileUpload } = require("../../aws3");
const router = express.Router();


// Get all posts
router.get(
  "/",
  asyncHandler(async (req, res) => {

    const posts = await Post.findAll({
      order: [
        ['vote', 'DESC']
      ],
      include: User
    });

    return res.json({posts: posts});
  })
);

// // Get all comments
// router.get(
//   "/",
//   asyncHandler(async (req, res) => {

//     const comments = await Comment.findAll();
//     console.log(comment)
//     return res.json({comments: comments});
//   })
// );

// Create a post
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const {caption, userId, image, username, profilePic} = req.body;
    console.log(req.body)
    const post = await Post.create({
      caption: caption,
      userId: userId,
      picture: image,
      username: username,
      profilePic: profilePic
    });

    // setTokenCookie(res, photo);

    return res.json({
    post
    });
  })
);

router.delete(
  "/posts/delete",
  asyncHandler(async (req, res) => {
    
    const { post } = req.body;

    await Post.destroy({where: {id: post}}).catch(e => {
     console.log(e.message)
  })
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
  '/vote/:id',
  asyncHandler(async (req, res, next) => {
    
    const { vote, postId } = req.body;
    const post = await Post.findByPk(postId);

    if (post) {
      await post.update({ 
          vote: vote,
        });
      res.json({ post });
    } 
  })
);


module.exports = router;