//FUNCTIONS FOR REST OPERATIONS ON USERS

const db = require('../db');

async function getUsers() {  //returns all users
    const { rows } = await db.query('SELECT * FROM ynot.user');
    return {
      code: 200,
      data: rows,
    };
  }
  
  async function getUser(id) {   //returns user with specific username
    const { rows } = await db.query('SELECT * FROM ynot.user WHERE u_userid = $1', [id]);
    if (rows.length > 0)
      return {
        code: 200,
        data: rows[0],
      };
    else
      return {
        code: 404,
        data: `the specified employee ${id} was not found in the database`,
      };
  }

  async function getUserByName(name) {   //returns user with specific username
    const { rows } = await db.query('SELECT * FROM ynot.user WHERE u_username = $1', [name]);
    if (rows.length > 0)
      return {
        code: 200,
        data: rows[0],
      };
    else
      return {
        code: 404,
        data: `the specified employee ${name} was not found in the database`,
      };
  }

  async function getUserInProject(p_id) {   //returns users working in specified project
    const { rows } = await db.query('QUERY', [p_id]);
    if (rows.length > 0)
      return {
        code: 200,
        data: rows[0],
      };
    else
      return {
        code: 404,
        data: `Employed Users for this project not found in database`,
      };
  }

  async function getSuggestedUsers(p_id) {    //returns suggested users for specified project
    	//Get project criteria
      const { rows } = await db.query('PROJECT CRITERIA QUERY', [p_id]);
      if(rows.length > 0)
      {
        //Get users fitting project criteria
        const { userRows } = await filterUsers(rows);
        if(projectRows.length > 0)
          return {
            code: 200,
            data: userRows,
          };
        else
          return {
            code: 404,
            data: `Users fitting this projects criteria not found in database`,
          };
      }
      else
      {
        return {
          code: 404,
          data: `Matching criteria for this project not found in the database`,
        };
      }
  }

  async function filterUsers(f) {   //returns Users fitting a filter
    // use stored function for the dates
    const {rows} = await db.query(`SELECT * FROM ynot.user u 
    join ynot.programming_language pl using (u_userid) 
    join ynot.company co using(u_userid)
    join ynot.educationial_institution i using(u_userid) 
    WHERE (u.u_country = $1 AND u.u_time_zone = $2 AND u.u_zip_code = $3 AND u.u_expected_salary = $4
      AND u.full_time = $5 AND pl.pl_name = $6 AND i.i_degree = $7 AND sum(year(co.co_startdate) - year(co.co_enddate)) = $8`
      ,[f.uc,f.utz,f.uzc,f.ues,f.uft,f.pln,f.ide,f.ex]);
    if (rows.length > 0)
      return {
        code: 200,
        data: rows[0],
      };
    else
      return {
        code: 404,
        data: `No users fitting this filter found`,
      };
  }

  async function insertUser(u) {    // create new user
    await db.query(
      `INSERT INTO user (u_firstname, u_surename, u_email, u_password, u_country, u_expected_salary, u_full_time
        u_zip_code, u_time_zone) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`,
      [u.u_firstname, u.u_surename, u.u_email, u.u_email, u.u_password, u.u_country, u.u_expected_salary, u.u_full_time,
      u.u_zip_code, u.u_time_zone],
    );
    return {
      code: 200,
      data: employee_id,
    };
  }

  async function signIn(uData) {
    //check if username & password match
    const { rows }  = await db.query(`PASSWORD QUERY FOR UNAME`, [uData.u_userid],);
    if(rows[0] == uData.u_password)
    {
      const {userinfo} = await getUserByName(uData.u_username);
      if(userinfo.code != 404)
      {
        return {
          code: 200,
          data: userinfo,
        };
      }
      else
      {
        return {
          code: 500,
          data: 'Server Error',
        };
      }
    }

    else
    {
      return {
        code: 403,
        data: 'Wrong credentials',
      };    
    }
    
  }

  async function patchUser(username, data) {   //Change existing User
    const user = await getUser(username);
    if (user.code != 200) return user; 
    //Body of request contains Key-Value pairs with Column names and new column contents
    //Key value pairs are "translated" into update statements
    let props = [];
    for (const prop in data) props.push(`${prop} = '${data[prop]}'`);
    let cmd = `UPDATE ynot.user SET ${props.join(',')} WHERE u_username = $1`;
    await db.query(cmd, [username]);
  
    return {
      code: 200,
      data: true,
    };
  }

  async function delUser(username) {   //deletes user with specific username
    const user = await getUser(username);
    if (user.code != 200) return user; //In case of error return message
  
    const { rows } = await db.query('SELECT u_userid FROM ynot.user WHERE u_username = $1', [username]);
    /*for (const row of rows) {
      await db.query('DELETE FROM order_details WHERE order_id = $1', [row.order_id]);
    }*/
    await db.query('DELETE FROM ynot.repository WHERE u_userid = $1', [rows[0].u_userid]);
    await db.query('DELETE FROM ynot.scientific_work WHERE u_userid = $1', [rows[0].u_userid]);
    await db.query('DELETE FROM ynot.certificate WHERE u_userid = $1', [rows[0].u_userid]);
    await db.query('DELETE FROM ynot.company WHERE u_userid = $1', [rows[0].u_userid]);
    await db.query('DELETE FROM ynot.messages WHERE u_userid = $1', [rows[0].u_userid]);
    await db.query('DELETE FROM ynot.application WHERE u_userid = $1', [rows[0].u_userid]);
    await db.query('DELETE FROM ynot.company WHERE u_userid = $1', [rows[0].u_userid]);
    await db.query('DELETE FROM ynot.programming_language WHERE u_userid = $1', [rows[0].u_userid]);
    await db.query('DELETE FROM ynot.user_project WHERE u_userid = $1', [rows[0].u_userid]);
    await db.query('DELETE FROM ynot.swiped_by WHERE u_userid = $1', [rows[0].u_userid]);
    await db.query('DELETE FROM ynot.matched_with WHERE u_userid = $1', [rows[0].u_userid]);
    await db.query('DELETE FROM ynot.user WHERE u_userid = $1', [rows[0].u_userid]);
    return {
      code: 200,
      data: true,
    };
  }


  module.exports = {
    getUsers,
    getUser,
    getUserInProject,
    getSuggestedUsers,
    filterUsers,
    insertUser,
    delUser,
    patchUser,
  };
  
