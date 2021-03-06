const express = require("express");
const asyncHandler = require("express-async-handler");

const { setTokenCookie } = require("../../utils/auth");
const { Comment, Photo } = require("../../db/models");
const { singleMulterUpload, singlePublicFileUpload, multipleMulterUpload, multiplePublicFileUpload } = require("../../aws3");
const router = express.Router();

// Get all photos
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const userId = req.params.id;

    const photos = await Photo.findAll({ where: {
      userId: userId,
      delivered: false
    },
      include: [
        {
          model: Comment,
          required: false,
          // where: { photoId: 2 } //
        },
      ],
    });

    res.json({ photos: photos });
  })
);

router.get(
  "/delivered/:id",
  asyncHandler(async (req, res) => {
    const userId = req.params.id;

    const photos = await Photo.findAll({ where: {
      userId: userId,
      delivered: true
    },
   
    });

    res.json({ photos: photos });
  })
);

router.get(
  "/:photoId/comments",
  asyncHandler(async (req, res) => {
    const {userId, photoId} = req.params;

    const comments = await Comment.findAll({
      where: {photoId},
    });

    res.json({ comments: comments });
  })
);

// upload photos
router.post(
  "/:userId",
  multipleMulterUpload("images"),
  asyncHandler(async (req, res) => {
    const { userId, delivered } = req.body;
    const urls = await multiplePublicFileUpload(req.files);
    const photos = await Promise.all(urls.map((url) => {
      return Photo.create({
        userId,
        url,
        delivered
      });
    }))
    
    // setTokenCookie(res, photo);

    return res.json({
      photos,
    });
  })
);

// Comment on photo
router.post(
  "/comments/:userId",
  asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    const { edit, photoId } = req.body;

    console.log(req.body);

    const comment = await Comment.create({
      userId,
      photoId,
      comment: edit,
    });
    return res.json({ comment: comment });
  })
);
router.delete(
  "/comments/delete",
  asyncHandler(async (req, res) => {
    
    const { comment } = req.body;

    await Comment.destroy({where: {comment: comment}}).catch(e => {
     console.log(e.message)
  })
  })
);


// Like a photo
router.patch(
  "/like",
  asyncHandler(async (req, res, next) => {
    const { userId, photoId, like } = req.body;
    console.log('--------->', photoId);
    const photo = await Photo.findByPk(photoId);
    if (photo)
      await photo.update({
        // id: photoId,
        like: like,
      });
    return res.json({
      photo,
    });
  })
);

module.exports = router;
