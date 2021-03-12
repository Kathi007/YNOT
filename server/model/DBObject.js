#! /usr/bin/node

var express = require('express');
const projects = require('./projects.js');
const project = require('./Project.js')
var app = express();
let data = require("./projects.js");
//Environment file require für Datenbank

class DBObject
{    
  //.env file
  //Postgres Zugangsdaten werden automatisch von pg abgerufen

    static Pool = require('pg').Pool;
    static ConnectionString = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'ynotcollab',
        password: 'Qk37npig!',
        port: 5432,
    })

    static getTableContent(Table) {
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
    
    static FindByKey()
    {
        return null;
    }

    FindAttribute()
    {

    }

    Delete()
    {
        return null;
    }

    ChangeAttribute()
    {
        return null;
    }
    
}

module.exports = DBObject;