const express = require("express");
const asyncHandler = require("express-async-handler");
const { Comment, Photo } = require("../../db/models");
const router = express.Router();


// Get all photos
router.get(
  "/:userId",
  asyncHandler(async (req, res) => {
    const userId = req.params.userId;

    const photos = await Photo.findAll({
      where: {
        userId,
      },
    });

    res.json({ photos: photos });
  })
);

// Get comments
router.get(
  "/:userId/:postId",
  asyncHandler(async (req, res) => {
    const postId = req.params.postId;

    const comments = await Comment.findAll({
      where: {
        postId,
      },
    });

    res.json({ comments: comments });
  })
);

// Comment on picture
router.post(
  "/:userId/:postId",
  asyncHandler(async (req, res) => {
    const { userId, postId, comment } = req.body;

    const comment = await Create.create({
      userId,
      postId,
      comment,
    });
    res.json(comment);
  })
);

// Like a photo
router.patch(
  "/:userId/postId",
  asyncHandler(async (req, res, next) => {
    const photo = await Photo.findOne(postId);

    await photo.update({
      like: req.body.like,
    });
    res.json({ photo });
  })
);


module.exports = router;
