var express = require('express');
var app = express();
let data = require("./model/projects");

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

//For get requests for projects without specifications: Return List of all Projects
app.get("/projects", (res, next) => {
  //res.json(["Hello", "World"]);
  
  //ProjectLists = Project.GetAll()
  //res.json(ProjectLists)
})

//For get requests with a specified project_id (integer): Return specific Project
app.get("/projects", (req, res, next)) => {
  //foundProject = Project.FindByKey(req.id)
  //res.json(foundProject)
})

//For get requests for users without specifications: Return List of all Users
app.get("/users", (res, next)) => {
  //users = User.GetAll()
  //res.json(users)
})

//For get requests for users with a specified username: specific User
app.get("/users", (req, res, next)) => {
  //founduser = User.FindByKey(req.name)
  //res.json(founduser)
})

/*
app.get('/projects', function(req, res, next) {
  res.send(data.getProjects());
});
app.get('/employees', function(req, res, next) {
  res.send(data.getEmployees());
});
*/

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
