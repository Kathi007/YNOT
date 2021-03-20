const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { getUsers, getUser, insertUser, delUser, patchUser } = require('../model/users');

//Get all Users
router.get(
  '/users',
  asyncHandler(async (req, res) => {
    const result = await getUsers();
    res.status(result.code).json(result);
  }),
);

//Get User by ID 
router.get(
  '/users/:id',
  asyncHandler(async (req, res) => {
    const result = await getUser(req.params.id);
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

//Get projects for specified user
router.get(
  '/users/projects/:u_id',
  asyncHandler(async (req, res) => {
    const result = await getUserProjects(req.params.u_id)
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