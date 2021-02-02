const express = require("express");
const asyncHandler = require("express-async-handler");
const { User } = require("../../db/models");
const router = express.Router();


// get user
router.get(
  "/:id",
  asyncHandler(async (req, res) => {

    const userId = req.params.id;

    // const user = await User.findOne({where: {
    //   userId
    // }});
    const user = await User.findOne(userId);

    if(!user) {
        return res.json({ msg: 'There is no user' });
    }

    res.json({user: user});
  })
);

// update profile pic
router.patch(
  '/:id',
  asyncHandler(async (req, res, next) => {
    const userId = req.params.id;
    const user = await User.findOne(userId);

    if (user) {
      await user.update({ 
          profilePic: req.body.profilePic,
        });
      res.json({ user });
    } else {
      res.status(400).json({msg: 'no profile'})
    }
  })
);

// update aboutMe
router.patch(
  '/:id',
  asyncHandler(async (req, res, next) => {
    const userId = req.params.id;
    const user = await User.findOne(userId);

    if (user) {
      await user.update({ 
          aboutMe: req.body.aboutMe 
        });
      res.json({ user });
    } else {
      res.status(400).json({msg: 'no profile'})
    }
  })
);

module.exports = router;