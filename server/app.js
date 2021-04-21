#! /usr/bin/node
console.log('Test');

const express = require('express'); //REST API module
const morgan = require('morgan'); //Module for logging incoming requests
const helmet = require('helmet'); //Security module for HTTP
const path = require('path'); //Allows compressed Webapp BE to be saved in public folder
require('colors');
const projectRoutes = require('./routes/projectRoutes');
const userRoutes = require('./routes/userRoutes');
const matchRoutes = require('./routes/matchRoutes');
const cookieParser = require('cookie-parser');
const history = require('connect-history-api-fallback');
const session = require('express-session');
const app = express();

const { errorHandler, notFoundHandler } = require('./middleware/errorHandler');

require('dotenv').config({ path: __dirname + '/.env' });

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.static(path.join(__dirname, '/public')));
app.use(history());
app.use(express.static(path.join(__dirname, '/public')));
//Use chain, Order relevant
//Each asnyc Functions calls Next()
//Exceptions drop through --> Not Found Handler / Error Handler
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/public'))); //Full system path to public folder, where webapp BE is saved
app.use(helmet());
app.use(express.json());
const {
  PORT,
  NODE_ENV,
  SESSION_LIFETIME,
  SESSION_NAME,
  SESSION_SECRET,
} = process.env;
// Register middleware for express sessions here
app.use(
  session({
    secret: SESSION_SECRET,
    name: SESSION_NAME,
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: SESSION_LIFETIME * 1000 * 60 * 60,
      httpOnly: false,
      sameSite: true,
      secure: NODE_ENV === 'production',
    },
  }),
);

app.use('/', projectRoutes);
app.use('/', userRoutes);
app.use('/', matchRoutes);
app.use(notFoundHandler);
app.use(errorHandler);

// const PORT = process.env.PORT || 5000;

// app.listen(PORT);
app.listen(PORT ?? 5000);

console.log(`Server running on port ${process.env.PORT}`);
