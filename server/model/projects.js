//hier kommen die funktionen
let allprojects = require("./projects.json");
let allemployees = require("./employees.json");

function getProjects() {
    return allprojects;
}
function getEmployees() {
    return allemployees;
}
module.exports = {
    getProjects,
    getEmployees,
}