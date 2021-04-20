const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const {
  getUsers,
  getUser,
  getUserInProject,
  getSuggestedUsers,
  filterUsers,
  delUser,
  patchUser,
} = require('../model/users');

const redirectLogin = (req, res, next) => {
  if (!req.session.userId) res.status(400).send('You are not logged in!');
  else next();
};

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
  '/users/:id',
  asyncHandler(async (req, res) => {
    const result = await getUser(req.params.id);
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

router.post(
  '/users/signin',
  asyncHandler(async (req, res) => {
    const result = await signIn(req.body);
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

router.post('/login', (req, res) => {
  // enter your code here
  //wird vom Frontend gegeben
  email = req.body.email;
  password = req.body.password;

  //ob die passwörter udn email gleich sind
  if (email && password) {
    const user = data.find(
      (el) => el.email === email && el.password === password,
    );
    if (user) {
      req.session.userId = user.id;
      //hier werden die daten vom server an den user geschickt
      res.status(200).json({ id: user.id, name: user.name });
    } else res.status(401).send('Wrong email or password');
  } else res.status(400).send('Login failed');
});
//logout
router.get('/logout', redirectLogin, (req, res) => {
  req.session.destroy();
  res.clearCookie(process.env.SESSION_NAME);
});

//user wird hinzugefügt
router.post('/register', (req, res) => {
  //hier soll stattdessen ein datenbankbefehl stehen? Ob diese email halt schon existiert
  let found = data.find((el) => el.email === req.body.email);
  if (!found) {
    data.push(req.body);
    res.status(200).send('added user');
  } else {
    res.status(409).send('Email already in use!');
  }
});

module.exports = router;
