//FUNCTIONS FOR REST OPERATIONS ON USERS

const db = require('../db');

async function getUsers() {  //returns all users
    const { rows } = await db.query('SELECT * FROM User');
    return {
      code: 200,
      data: rows,
    };
  }
  
  async function getUser(name) {   //returns user with specific username
    const { rows } = await db.query('SELECT * FROM user WHERE username = $1', [name]);
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

  async function filterUsers(f) {   //returns Users fitting a filter
    const {rows} = await db.query(`QUERY`,[]);
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

  //DOMINIK: INSERT SPECIFICS
  async function insertUser(u) {    // create new user
    let { rows } = await db.query('SELECT MAX(employee_id) AS max FROM employees'); //Different logic needed for username creation
    let employee_id = rows[0].max + 1;
    await db.query(
      `INSERT INTO user (employee_id, last_name, first_name, title)
                             VALUES($1,$2,$3,$4)`,
      [employee_id, e.lastName, e.firstName, e.title],
    );
    return {
      code: 200,
      data: employee_id,
    };
  }

  async function patchUser(username, data) {   //Change existing User
    const user = await getUser(username);
    if (user.code != 200) return user; 
    //Body of request contains Key-Value pairs with Column names and new column contents
    //Key value pairs are "translated" into update statements
    let props = [];
    for (const prop in data) props.push(`${prop} = '${data[prop]}'`);
    let cmd = `UPDATE user SET ${props.join(',')} WHERE username = $1`;
    await db.query(cmd, [username]);
  
    return {
      code: 200,
      data: true,
    };
  }

  async function delUser(username) {   //deletes user with specific username
    const user = await getUser(username);
    if (user.code != 200) return user; //In case of error return message
  
    //DOMINIK: CASCADING DELETE NEEDED
    const { rows } = await db.query('SELECT * FROM user WHERE username = $1', [username]);
    for (const row of rows) {
      await db.query('DELETE FROM order_details WHERE order_id =$1', [row.order_id]);
    }
    await db.query('DELETE FROM orders WHERE employee_id = $1', [id]);
    await db.query('DELETE FROM user WHERE username = $1', [username]);
    return {
      code: 200,
      data: true,
    };
  }


  module.exports = {
    getUsers,
    getUser,
    insertUser,
    delUser,
    patchUser,
  };
  
