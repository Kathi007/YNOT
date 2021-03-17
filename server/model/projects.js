//FUNCTIONS FOR REST OPERATIONS ON PROJECTS

const db = require('../db');

async function getProjects() {  //returns all projects
    const { rows } = await db.query('SELECT * FROM ynot.project');
    return {
      code: 200,
      data: rows,
    };
  }
  
  async function getProject(id) {   //returns project with specific ID
    const { rows } = await db.query('SELECT * FROM ynot.project WHERE p_projectid = $1', [id]);
    if (rows.length > 0)
      return {
        code: 200,
        data: rows[0],
      };
    else
      return {
        code: 404,
        data: `the specified Project ${id} was not found in the database`,
      };
  }

  async function filterProjects(p) {   //returns Projects fitting a filter
    const {rows} = await db.query(`QUERY`,[]);
    if (rows.length > 0)
      return {
        code: 200,
        data: rows[0],
      };
    else
      return {
        code: 404,
        data: `No projects fitting filter ${p} found`,
      };
  }

  async function insertProject(p) {    // create new project
    console.log(p.p_name);
    await db.query(
      `INSERT INTO ynot.project (p_name, p_maxsize, p_drivelink, p_language, u_userid, p_description)
                             VALUES($1,$2,$3,$4,$5,$6)`,
      [p.p_name, p.p_maxsize, p.p_drivelink, p.p_language, p.u_userid, p.p_description],
    );
    return {
      code: 200,
      data: p.p_name,
    };
  }

  async function patchProject(id, data) {   //Change existing project
    const project = await getProject(id);
    if (project.code != 200) return project; 
    //Body of request contains Key-Value pairs with Column names and new column contents
    //Key value pairs are "translated" into update statements
    let props = [];
    for (const prop in data) props.push(`${prop} = '${data[prop]}'`);
    let cmd = `UPDATE ynot.project SET ${props.join(',')} WHERE p_projectid = $1`;
    await db.query(cmd, [id]);
  
    return {
      code: 200,
      data: true,
    };
  }

  async function delProject(id) {   //deletes project with specific ID
    const result = await getProject(id);
    if (result.code != 200) return result; //In case of error return message
  
    //DOMINIK: CASCADING DELETE NEEDED
    const { rows } = await db.query('SELECT * FROM ynot.project WHERE projectID = $1', [id]);
    for (const row of rows) {
      await db.query('DELETE FROM order_details WHERE order_id = $1', [row.order_id]);
    }
    await db.query('DELETE FROM orders WHERE employee_id = $1', [id]);
    await db.query('DELETE FROM employees WHERE employee_id = $1', [id]);
    return {
      code: 200,
      data: true,
    };
  }
  

  module.exports = {
    getProjects,
    getProject,
    insertProject,
    delProject,
    patchProject,
  };
  