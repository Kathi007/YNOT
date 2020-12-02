var express = require('express');
var app = express();
let data = require("./model/projects");

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', function(req, res, next) {
  res.send(data.getData());
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
