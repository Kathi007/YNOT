const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { getMatch, getMatches, checkMatch, delMatch, insertMatch} = require('../model/matches');
  
router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
//Get all matches for a user
router.get(
  '/matches/user/:id',
  asyncHandler(async (req, res) => {
    const result = await getMatches(req.params.id);
    res.status(result.code).json(result);
  }),
);

//Get specific match
router.get(
  '/matches',
  asyncHandler(async (req, res) => {
    const result = await getMatch(req.body);
    res.status(result.code).json(result);
  }),
);

//Add match (right swipe)
router.post(
    '/matches',
    asyncHandler(async (req, res) => {
      const result = await insertMatch(req.body);
      res.status(result.code).json(result);
    }),
);

//Delete Match
router.delete(
  '/matches/:id',
  asyncHandler(async (req, res) => {
    const result = await delMatch(req.params.id);
    res.status(result.code).json(result);
  }),
);

module.exports = router;