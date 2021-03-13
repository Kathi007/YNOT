#! /usr/bin/node
console.log("Test");

const express = require('express'); //REST API module
const morgan = require('morgan'); //Module for logging incoming requests
const helmet = require('helmet'); //Security module for HTTP
const path = require('path'); //Allows compressed Webapp BE to be saved in public folder
require('colors'); 
const projectRoutes = require('./routes/projectRoutes');
const userRoutes = require('./routes/userRoutes');
const { errorHandler, notFoundHandler } = require('./middleware/errorHandler');
require('dotenv').config();

const app = express();

//Use chain, Order relevant
//Each asnyc Functions calls Next()
//Exceptions drop through --> Not Found Handler / Error Handler
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/public'))); //Full system path to public folder, where webapp BE is saved
app.use(helmet());
app.use(express.json());

app.use('/', projectRoutes);
app.use('/', userRoutes);
app.use(notFoundHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
console.log('Server running on port 5000');