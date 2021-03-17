const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { getUsers, getUser, insertUser, delUser, patchUser } = require('../model/users');

router.get(
  '/users',
  asyncHandler(async (req, res) => {
    const result = await getUsers();
    res.status(result.code).json(result);
  }),
);

router.get(
  '/users/:id',
  asyncHandler(async (req, res) => {
    const result = await getUser(req.params.id);
    res.status(result.code).json(result);
  }),
);

router.get(
  '/users/filtered',
  asyncHandler(async (req, res) => {
    const result = await filterUsers(req.body);
    res.status(result.code).json(result);
  }),
);

router.post(
    '/users',
    asyncHandler(async (req, res) => {
      const result = await insertUser(req.body);
      res.status(result.code).json(result);
    }),
  );

router.patch(
    '/users/:id',
    asyncHandler(async (req, res) => {
      const result = await patchUser(req.params.id, req.body);
      res.status(result.code).json(result);
    }),
);

router.delete(
  '/users/:id',
  asyncHandler(async (req, res) => {
    const result = await delUser(req.params.id);
    res.status(result.code).json(result);
  }),
);

module.exports = router;