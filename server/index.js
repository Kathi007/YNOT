#! /usr/bin/node
const { query } = require('express');
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

  constructor(id, name, maxsize, drivelink, language, description, image, userid)
  {
    this.id = id;
    this.name = name;
    this.maxsize = maxsize;
    this.drivelink = drivelink;
    this.language = language;
    this.description = description;
    this.image = image;
    this.userid = userid;
  }

  static getAll(Table) {
    var query={
      text: 'select * from ynot.Project;',
      value: [Table]
    }

    pool.query(query, (error, results) => {
      var solution=[];
      if (error) {
        console.log(error);
        return null;
      }
      else {       
        results.rows.forEach(element => {
          let project = new Map(Object.entries(element));
          solution.push(new Project(project.get('p_projectid'),project.get('p_name'),project.get('p_maxsize'),project.get('p_drivelink'),project.get('p_language'),project.get('p_description'),project.get('p_image'),project.get('p_userid')));
        });
        return solution;
      }
    })
      
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

  let allprojects = Project.getAll('Project');
  console.log('Received all Projects: ', allprojects);

  let newProject = new Project(5, "YNOT", "Matching app for programmers");
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