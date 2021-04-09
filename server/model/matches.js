//FUNCTIONS FOR REST OPERATIONS ON MATCHES

const db = require('../db');

async function getMatches(u_id) {  //returns matches for user
    const { rows } = await db.query('SELECT * FROM ynot.matched_with WHERE u_userid = $1',[u_id]);
    if (rows.length > 0)
    {
      return {
        code: 200,
        data: rows,
      };
    }
    else
    {
      return {
        code: 404,
        data: 'No matches found for user',
      };
    }
  }

  async function getMatch(ids) {  //returns specific match
    const { rows } = await db.query('SELECT * FROM ynot.matched_with WHERE (u_userid = $1 AND p_projectid = $2', [ids.u_id,ids.p_id]);
    if (rows.length > 0)
      return {
        code: 200,
        data: rows[0],
      };
    else
      return {
        code: 404,
        data: `Match not found`,
      };
  }
  
  async function checkMatch(c_id, e_id) {   //  Checks if creater & employee have a match
    const { rows } = await db.query('SELECT * FROM ynot.matched_with WHERE p_projectid = $1', [c_id, e_id]);
    if (rows.length > 0)
      return {
        code: 200,
        data: "true",
      };
    else
      return {
        code: 200,
        data: "false",
      };
  }

  async function insertMatch(u_id,p_id) {    //    For right swipes: create new match if appropriate
    const isMatch = await checkMatch(u_id,p_id);
    if (isMatch.data == "true")
    {
        await db.query(
            `INSERT INTO ynot.matched_with (u_userid,p_project) VALUES ($1,$2)`,
            [u_id,p_id],
          );
        await db.query(
            `DELETE FROM ynot.swiped_by WHERE (u_userid = $1 AND p_projectid = $2)`,[u_id,p_id]
        );
        return {
            code: 200,
            data: "true",
        };
    }
    else
    {
      await db.query(
        `INSERT INTO ynot.swiped_by (u_userid,p_projectid) VALUES ($1,$2)`,
        [u_id, p_id],
      );

      return {
          code: 200,
          data: "false",
        };
    }
  }

  async function delMatch(u_id,p_id) {   //deletes match with specified id
    const match = await getMatch(u_id,p_id);
    if (result.code != 200) return result; //In case of error return message
    else
    {
        const { rows } = await db.query('DELETE FROM ynot.matched_with WHERE (u_userid = $1 AND p_projectid = $2)', [u_id,p_id]);
        return {
          code: 200,
          data: id,
        };
    }
  }
  

  module.exports = {
    getMatch,
    getMatches,
    checkMatch,
    insertMatch,
    delMatch
  };  