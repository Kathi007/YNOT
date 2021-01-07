//hier kommen die funktionen
let allprojects = require("./projects.json");
let allemployees = require("./employees.json");
let userstest = require("./users.json");

function getProjects() {
    return allprojects;
}
function getEmployees() {
    return allemployees;
}
function getUserTests() {
    return userstest;
}
module.exports = {
    getProjects,
    getEmployees,
    getUserTests
}