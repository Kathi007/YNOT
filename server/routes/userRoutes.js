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
  signIn,
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

//Log out user --> Clear session
router.get(
  '/users/logout',
  asyncHandler(async (req, res) => {
    req.session.destroy();
    res.clearCookie(process.env.SESSION_NAME);
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

//Login for user
router.post(
  '/login',
  asyncHandler(async (req, res) => {
    const result = await signIn(req.body);    
    if (result) {
      req.session.userId = result.u_userid;
      res.status(200).json({ id: result.u_userid, name: result.u_username });
    } else {
      res.status(401).send('Wrong email or password');
    }
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

/*
router.post('/login', (req, res) => {
  // enter your code here
  //wird vom Frontend gegeben
  email = req.body.email;
  password = req.body.username;

  //ob die passwörter und email gleich sind
  if (username && password) {
    const user = data.find(
      (el) => el.username === username && el.password === password,
    );
    if (user) {
      req.session.userId = user.id;
      //hier werden die daten vom server an den user geschickt
      res.status(200).json({ id: user.id, name: user.name });
    } else res.status(401).send('Wrong email or password');
  } else res.status(400).send('Login failed');
});
*/
//logout
router.get('/logout', redirectLogin, (req, res) => {
  req.session.destroy();
  res.clearCookie(process.env.SESSION_NAME);
});

//user wird hinzugefügt
router.post(
  '/register',
  asyncHandler(async (req, res) => {
    //Ob diese email schon existiert
    let found = data.find((el) => el.email === req.body.email);
    if (!found) {
      // data.push(req.body);
      const result = await signIn(req.body);
      res.status(result.code).json(result);

      res.status(200).send('added user');
    } else {
      res.status(409).send('Email already in use!');
    }
  }),
);

module.exports = router;
