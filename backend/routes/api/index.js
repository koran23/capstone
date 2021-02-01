// backend/routes/api/index.js
const router = require('express').Router();
// GET /api/set-token-cookie
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
// GET /api/restore-user
const { restoreUser } = require('../../utils/auth.js');
// GET /api/require-auth
const { requireAuth } = require('../../utils/auth.js');
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const profileRouter = require('./profile.js');
const venueRouter = require('./venue.js');
const reviewRouter = require('./review.js');
const reservationRouter = require('./reservation.js');

router.use('/reservation', reservationRouter);

router.use('/review', reviewRouter);

router.use('/venue', venueRouter);

router.use('/profile', profileRouter);

router.use('/session', sessionRouter);

router.use('/users', usersRouter);



router.get(
  '/require-auth',
  requireAuth,
  (req, res) => {
    return res.json(req.user);
  }
);


router.get(
  '/restore-user',
  restoreUser,
  (req, res) => {
    return res.json(req.user);
  }
);

router.get('/set-token-cookie', asyncHandler(async (req, res) => {
  const user = await User.findOne({
      where: {
        username: 'Demo-lition'
      },
    })
  setTokenCookie(res, user);
  return res.json({ user });
}));

router.post('/test', function(req, res) {
//     fetch('/api/test', {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "XSRF-TOKEN": `97pDmNKS-_gIBKSqIT8Yy34eBOhMMdgoQJgQ`
//   },
//   body: JSON.stringify({ hello: 'world' })
// }).then(res => res.json()).then(data => console.log(data));

  res.json({ requestBody: req.body });
});


module.exports = router;