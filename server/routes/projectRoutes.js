const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { getProjects, getProject, insertProject, patchProject, delProject} = require('../model/projects');

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

//Get filtered Projects
router.get(
  '/projects/filtered',
  asyncHandler(async (req, res) => {
    const result = await filterProjects(req.body);
    res.status(result.code).json(result);
  }),
);

router.post(
    '/projects',
    asyncHandler(async (req, res) => {
      const result = await insertProject(req.body);
      res.status(result.code).json(result);
    }),
);

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
