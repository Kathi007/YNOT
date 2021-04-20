//FUNCTIONS FOR REST OPERATIONS ON PROJECTS

const db = require('../db');

async function getProjects() {  //returns all projects
    const { rows } = await db.query('SELECT * FROM ynot.project join ynot.project_pl on (p_projectid=p_id)');
    return {
      code: 200,
      data: rows,
    };
  }
  
  async function getProject(id) {   //returns project with specific ID
    const { rows } = await db.query('SELECT * FROM ynot.project WHERE p_projectid = $1 join ynot.project_pl on (p_projectid=p_id)', [id]);
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

  async function getUserProjects(u_id) {
    const { rows } = await db.query('SELECT * FROM ynot.user u join user_project up using(u_userid) where u_userid = $1', [u_id]);
    if (rows.length > 0)
      return {
        code: 200,
        data: rows[0],
      };
    else
      return {
        code: 404,
        data: `No projects employeeing this user found`,
      };
  }

  async function getCreatedProjects(u_id) { //returns projects created by specified user
    const { rows } = await db.query('SELECT * FROM ynot.project where u_userid = $1 join ynot.project_pl on (p_projectid=p_id)', [u_id]);
    if (rows.length > 0)
      return {
        code: 200,
        data: rows[0],
      };
    else
      return {
        code: 404,
        data: `No Projects created by user found`,
      };
  }

  async function getSuggestedProjects(f) {   //returns projects fitting specified users criteria
    	//Get user criteria
      const { rows } = await db.query(`SELECT * FROM ynot.user u 
        join ynot.user_pl using (u_userid)
        join ynot.programming_language pl using (u_userid) 
        join ynot.company co using(u_userid)
        join ynot.educationial_institution i using(u_userid) 
        WHERE (u.u_country = $1 AND u.u_time_zone = $2 AND u.u_zip_code = $3 AND u.u_expected_salary = $4
          AND u.full_time = $5 AND pl.pl_name = $6 AND i.i_degree = $7 AND sum(year(co.co_startdate) - year(co.co_enddate)) = $8`, 
          [f.uc,f.utz,f.uzc,f.ues,f.uft,f.pln,f.ide,f.ex]);
      if(rows.length > 0)
      {
        //Get projects with user criteria
        const { projectRows } = await filterProjects(rows);
        if(projectRows.code != 404)
          return {
            code: 200,
            data: projectRows,
          };
        else
          return {
            code: 404,
            data: `No projects fitting this criteria found`,
          };
      }
      else
      {
        return {
          code: 404,
          data: `Matching criteria for this user not found in the database`,
        };
      }
  }


  async function filterProjects(f) {   //returns Projects fitting a filter
    const {rows} = await db.query(`SELECT * FROM ynot.project p
    join ynot.project_pl on (p_projectid=p_id)
    join ynot.programming_language pl using (pl_id) 
    WHERE (p.p_country = $1 AND p.p_time_zone = $2 AND p.p_zip_code = $3 AND u.full_time = $4 AND pl.pl_name= $5
      p.p_degree = $6 AND p_expereince = $7`,[f.pc,f.ptz,f.pzc,f.pft,f.pln,f.pde,f.pe]);
    if (rows.length > 0)
      return {
        code: 200,
        data: rows[0],
      };
    else
      return {
        code: 404,
        data: `No projects fitting this filter found`,
      };
  }


  async function insertProject(p) {    // create new project
    console.log(p.p_name);
    await db.query(
      `INSERT INTO ynot.project (p_name, p_maxsize, p_drivelink, p_language, u_userid, p_description, p_zip_code, p_full_time, p_country, p_time_zone, p_short_description)
                             VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`,
      [p.p_name, p.p_maxsize, p.p_drivelink, p.p_language, p.u_userid, p.p_description, p.p_zip_code, p.p_full_time, p.p_country, p.p_time_zone, p.p_short_description],
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
    //const { rows } = await db.query('SELECT * FROM ynot.project WHERE p_projectid = $1', [id]);
    /*for (const row of rows) {
      await db.query('DELETE FROM order_details WHERE order_id = $1', [row.order_id]);
    }*/
    await db.query('DELETE FROM ynot.messages WHERE p_projectid = $1', [id]);
    await db.query('DELETE FROM ynot.application WHERE p_projectid = $1', [id]);
    await db.query('DELETE FROM ynot.social_media WHERE p_projectid = $1', [id]);
    await db.query('DELETE FROM ynot.application WHERE p_projectid = $1', [id]);
    await db.query('DELETE FROM ynot.project WHERE p_projectid = $1', [id]);
    return {
      code: 200,
      data: true,
    };
  }
  

  module.exports = {
    getProjects,
    getProject,
    getUserProjects,
    getCreatedProjects,
    getSuggestedProjects,
    filterProjects,
    insertProject,
    delProject,
    patchProject
  };
  