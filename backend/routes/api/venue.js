const express = require("express");
const asyncHandler = require("express-async-handler");
const { User, Venue } = require("../../db/models");
const router = express.Router();

// @route  GET api/profile/me
// @desc   Test route
// @access Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const venues = await Venue.findAll({ order: [["createdAt", "DESC"]] });

    res.json({ venues: venues });
  })
);

router.get(
  "/:venueId",
  asyncHandler(async (req, res) => {
    const venueId = req.params.id;

    const venue = await Venue.findOne(venueId);

    return res.json(venue);
  })
);

router.post(
  "/new-venue",
  asyncHandler(async (req, res) => {
    const {
      ownerId,
      name,
      typeOfVenue,
      totalOccupacy,
      summary,
      address,
      hasKitchen,
      hasAirCon,
      hasHeating,
      hasInternet,
      pricePerDay,
    } = req.body;

    const venue = await Venue.create({
      ownerId,
      name,
      typeOfVenue,
      totalOccupacy,
      summary,
      address,
      hasKitchen,
      hasAirCon,
      hasHeating,
      hasInternet,
      pricePerDay,
    });
    res.json({venue: venue});
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const ownerId = req.params.id;

    const venues = await Venue.findAll({ where: {
        ownerId
      }});
     
    res.json({venues: venues});
  })
);

module.exports = router;
