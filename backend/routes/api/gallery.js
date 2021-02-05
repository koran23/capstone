const express = require("express");
const asyncHandler = require("express-async-handler");

const { setTokenCookie } = require('../../utils/auth');
const { Comment, Photo } = require("../../db/models");
const { singleMulterUpload, singlePublicFileUpload } = require("../../aws3");
const router = express.Router();


// Get all photos
router.get(
  "/:userId",
  asyncHandler(async (req, res) => {
    const userId = req.params.userId;

    const photos = await Photo.findAll({include: Comment});

    res.json({ photos: photos });
  })
);

// upload photos
router.post(
  "/:userId",
  singleMulterUpload("image"),
  asyncHandler(async (req, res) => {
    const {userId} = req.body;
    const url = await singlePublicFileUpload(req.file);
    const photo = await Photo.create({
      userId,
      url
    });

    // setTokenCookie(res, photo);

    return res.json({
    photo,
    });
  })
);


// Comment on photo
router.post(
  "/comments/:userId",
  asyncHandler(async (req, res) => {
     const userId = req.params.userId;
    const { edit, photoId } = req.body;
    
    console.log(req.body)

    const comment = await Comment.create({
      userId,
      photoId,
      comment: edit,
    });
    return res.json({comment: comment});
  })
);

// Get comments
// router.get(
//   "/:userId",
//   asyncHandler(async (req, res) => {

//     const comments = await Comment.findAll({
//       where: {
//         postId,
//       },
//     });

//     res.json({ comments: comments });
//   })
// );


// Like a photo
// router.patch(
//   "/:userId/postId",
//   asyncHandler(async (req, res, next) => {
//     const photo = await Photo.findOne(postId);

//     await photo.update({
//       like: req.body.like,
//     });
//     res.json({ photo });
//   })
// );


module.exports = router;
