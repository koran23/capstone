const express = require("express");
const asyncHandler = require("express-async-handler");
const { User } = require("../../db/models");
const { singleMulterUpload, singlePublicFileUpload } = require("../../aws3");
const router = express.Router();



// update profile pic
router.put(
  '/:userId',
  singleMulterUpload("image"),
  asyncHandler(async (req, res, next) => {
    const {userId} = req.body;
    const user = await User.findOne(userId);

    const url = await singlePublicFileUpload(req.file);
    if (user) await user.update({
      userId: userId,
      profilePic: url
    });

    // setTokenCookie(res, photo);

    return res.json({
    user,
    });
  })
);

// // update aboutMe
// router.patch(
//   '/:userId',
//   asyncHandler(async (req, res, next) => {
//     const userId = req.params.userId;
//     const user = await User.findOne(userId);

//     if (user) {
//       await user.update({ 
//           aboutMe: req.body.aboutMe 
//         });
//       res.json({ user });
//     } else {
//       res.status(400).json({msg: 'no profile'})
//     }
//   })
// );

module.exports = router;