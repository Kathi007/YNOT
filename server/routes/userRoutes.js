const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { getUsers, getUser, getUserInProject, getSuggestedUsers, filterUsers, delUser, patchUser } = require('../model/users');

//Get all users
router.get(
  '/users',
  asyncHandler(async (req, res) => {
    const result = await getUsers();
    res.status(result.code).json(result);
  }),
);

//Get user by Username
router.get(
  '/users/:uname',
  asyncHandler(async (req, res) => {
    const result = await getUser(req.params.uname);
    res.status(result.code).json(result);
  }),
);

//Get users working in a project
router.get(
  '/users/workingin/p_id',
  asyncHandler(async (req, res) => {
    const result = await getUserInProject(req.params.p_id);
    res.status(result.code).json(result);
  }),
);

//Get suggested users for a project
router.get(
  '/users/suggestedfor/p_id',
  asyncHandler(async (req, res) => {
    const result = await getSuggestedUsers(req.params.p_id);
    res.status(result.code).json(result);
  }),
);

//Get users filtered by specified requirements
router.get(
  '/users/filtered',
  asyncHandler(async (req, res) => {
    const result = await filterUsers(req.body);
    res.status(result.code).json(result);
  }),
);

//Add new user with specified attributes
router.post(
    '/users',
    asyncHandler(async (req, res) => {
      const result = await insertUser(req.body);
      res.status(result.code).json(result);
    }),
  );

//Change user criteria
router.patch(
    '/users/:id',
    asyncHandler(async (req, res) => {
      const result = await patchUser(req.params.id, req.body);
      res.status(result.code).json(result);
    }),
);

//Remove user
router.delete(
  '/users/:id',
  asyncHandler(async (req, res) => {
    const result = await delUser(req.params.id);
    res.status(result.code).json(result);
  }),
);

module.exports = router;