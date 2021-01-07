var express = require('express');
var app = express();
let data = require("./model/projects");

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/projects', function(req, res, next) {
  res.send(data.getProjects());
});
app.get('/employees', function(req, res, next) {
  res.send(data.getEmployees());
});
app.get('/users', function(req, res, next) {
  res.send(data.getUserTests());
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
