//FUNCTIONS FOR REST OPERATIONS ON MATCHES

const db = require('../db');

async function getMatch(id) {  //returns specific match
    const { rows } = await db.query('QUERY', [id]);
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


async function getMatches(u_id) {  //returns matches for user
    const { rows } = await db.query('QUERY');
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
  
  async function checkMatch(c_id, e_id) {   //  Checks if creater & employee have a match
    const { rows } = await db.query('QUERY', [c_id, e_id]);
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

  async function insertMatch(c_id, e_id) {    //    For right swipes: create new match if appropriate
    const isMatch = await checkMatch(c_id, e_id);
    if (isMatch.data == "true")
    {
        await db.query(
            `INSERT MATCH QUERY`,
            [c_id, e_id],
          );

        return {
            code: 200,
            data: "true",
        };
    }
    else
    {
      await db.query(
        `INSERT SWIPE QUERY`,
        [c_id, e_id],
      );

      return {
          code: 200,
          data: "false",
        };
    }
  }

  async function delMatch(id) {   //deletes match with specified id
    const match = await getMatch(id);
    if (result.code != 200) return result; //In case of error return message
    else
    {
        const { rows } = await db.query('DELETE STATEMENT', [id]);
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
  