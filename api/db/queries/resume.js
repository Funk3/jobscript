//All queries for resume

const db = require('../connection')

/**
 * Add resume text to resume table based on UserID
 * @param {*} userID cookie id from req.sessions
 * @param {*} resumeText somehow from upload or textarea
 * @returns Returns a promise, but shouldnt need to access res. Mosty just for debugging at this stage?!
 */
const addResumeByUser = (userID, resumeText) => {
return db.query(`INSERT INTO resume (user_id, text) VALUES ($1, $2) RETURNING * `,
[userID, resumeText])
.then(result => {
  //console.log("addResumeByUser =", result.rows[0]);
  return result.rows[0];
})
}

//addResumeByUser(2, 'This is users 2 adding resume'); //works

/**
 * To fetch resume text to be inputted into API query string
 * @param {*} userID from req.session
 * @returns A string of resume text
 */
const getResumeByUser = userID => {
  //Maybe SELECT text FROM resume instead?
  return db.query( 'SELECT * FROM resume WHERE user_id = $1', [userID])
  .then(response => {
    //console.log("getResumeByUser =", response.rows[0]);
    return response.rows[0];
  })
}

//getResumeByUser(3); //works


module.exports = { addResumeByUser, getResumeByUser}