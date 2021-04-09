const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { getProjects, getProject, getUserProjects, getCreatedProjects, getSuggestedProjects, filterProjects, insertProject, patchProject, delProject} = require('../model/projects'); //ADD NEW FUNCTIONS

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
//Get all projects
router.get(
  '/projects',
  asyncHandler(async (req, res) => {
    const result = await getProjects();
    res.status(result.code).json(result);
  }),
);

//Get specific Project
router.get(
  '/projects/:id',
  asyncHandler(async (req, res) => {
    const result = await getProject(req.params.id);
    res.status(result.code).json(result);
  }),
);

//Get projects specified user works in
router.get(
  '/projects/employs/:u_id',
  asyncHandler(async (req, res) => {
    const result = await getUserProjects(req.params.u_id);
    res.status(result.code).json(result);
  }),
);

//Get projects created by specified user
router.get(
  '/projects/createdby/:u_id',
  asyncHandler(async (req, res) => {
    const result = await getCreatedProjects(req.params.u_id);
    res.status(result.code).json(result);
  }),
);

//Get suggested projects for specified user
router.get(
  '/projects/suggestedto/:u_id',
  asyncHandler(async (req, res) => {
    const result = await getSuggestedProjects(req.params.u_id);
    res.status(result.code).json(result);
  }),
);

//Add project
router.post(
    '/projects',
    asyncHandler(async (req, res) => {
      const result = await insertProject(req.body);
      res.status(result.code).json(result);
    }),
);

//
router.patch(
    '/projects/:id',
    asyncHandler(async (req, res) => {
      const result = await patchProject(req.params.id, req.body);
      res.status(result.code).json(result);
    }),
);

router.delete(
  '/projects/:id',
  asyncHandler(async (req, res) => {
    const result = await delProject(req.params.id);
    res.status(result.code).json(result);
  }),
);

module.exports = router;
