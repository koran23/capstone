const express = require("express");
const asyncHandler = require("express-async-handler");
const { User, Review } = require("../../db/models");
const router = express.Router();


// @route  GET api/profile/me
// @desc   Test route
// @access Public
router.get(
  "/:venueId",
  asyncHandler(async (req, res) => {
      const venueId = req.params.id;

    const reviews = await Review.findAll({ where: {
        id: venueId,
      },
     });

    return res.json(reviews);

  })
);


router.post(
  "/new-review",
  asyncHandler(async (req, res) => {
    const { 
        venueId,
        userId,
        rating,
        comment

     } = req.body;

    const review = await Review.create({ 
        venueId,
        userId,
        rating,
        comment
    })
    res.json(review);
  })
);

module.exports = router;