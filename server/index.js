#! /usr/bin/node
var express = require('express');
const projects = require('./model/projects');
var app = express();
let data = require("./model/projects");
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ynotcollab',
  password: 'Qk37npig!',
  port: 5432,
})

//Classes:
class Project {
  /*id
  name
  description*/

  constructor(id, name, description)
  {
    this.id = id;
    this.name = name;
    this.description = description;
  }

  static getAll(Table) {
    var solution = null;

    pool.query('SELECT * FROM ynot.'+Table+';', (error, results) => {
      if (error) {
        solution = error;        
      }
      else {
        let project1 = results.rows[0];
        console.log(results.rows[0]);
        console.log(project1[0]);
      }        
    })

    var projects = [new Project(1,'YNOT','Project Tinder'), new Project(2,'SwapQL','SQL Swaper'), new Project(3,'WannaSave','Bullshit')];
    return projects;
  }
}

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

//For get requests for projects without specifications: Return List of all Projects
app.get("/projects", (res, next) => {  
  Projects = Project.getAll('Project');
  res.json(Projects);
  //ProjectLists = Project.GetAll()
  //res.json(ProjectLists)
})

app.listen(3000, () => {
  console.log('Server running on port 3000');

  allprojects = Project.getAll('Project');
  console.log('Received all Projects: ', allprojects[0]);

  newProject = new Project(5, "YNOT", "Matching app for programmers");
  console.log('Created New Project: ', newProject.name);
});


/*
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


app.get('/projects', function(req, res, next) {
  res.send(data.getProjects());
});
app.get('/employees', function(req, res, next) {
  res.send(data.getEmployees());
});
*/