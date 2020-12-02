//hier kommen die funktionen
let allprojects = require("./projects.json");

function getData() {
    return allprojects;
}
module.exports = {
    getData,
}