const express = require("express");
const asyncHandler = require("express-async-handler");
const { User, Profile, Review, Reservation, Venue } = require("../../db/models");
const router = express.Router();


// @route  GET api/profile/me
// @desc   Test route
// @access Public
router.get(
  "/me/:id",
  asyncHandler(async (req, res) => {

    const userId = req.params.id;

    const profile = await Profile.findOne({where: {
      userId
    }});

    if(!profile) {
        return res.json({ msg: 'There is no profile for this user' });
    }

    res.json({profile: profile});
  })
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { userId, bio, location } = req.body;

    const profile = await Profile.create({ userId, bio, location })
    res.json({profile: profile});
  })
);

router.put(
  '/:userId',
  asyncHandler(async (req, res, next) => {
    const userId = req.params.id;
    const profile = await Profile.findOne(userId);

    if (profile) {
      await profile.update({ 
          bio: req.body.bio,
          location: req.body.location 
        });
      res.json({ profile });
    } else {
      res.status(400).json({msg: 'no profile'})
    }
  })
);

router.get(
  "/me/review/:id",
  asyncHandler(async (req, res) => {
    const userId = req.params.id;

    const reviews = await Review.findAll({ where: {
        userId,
      }, });

    return res.json(reviews);
  })
);

router.get(
  "/me/reservation/:id",
  asyncHandler(async (req, res) => {
    const userId = req.params.id;

    const reservations = await Reservation.findAll({ where: {
        userId,
      }, include: [
        Venue
      ]});

    return res.json({reservations: reservations});
  })
);

module.exports = router;