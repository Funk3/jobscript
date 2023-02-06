// All queries relating to Job Description

const db = require('./connection')

/**
 * To add fields from job description component into job_description table, by userID
 * @param {*} userID from req.session
 * @param {*} jobTitle from input field
 * @param {*} companyName from input field
 * @param {*} jobDescriptionText from input field
 * @returns  Returns a promise, but shouldnt need to access res. Mosty just for debugging at this stage?!
 */
const addJobDescriptionByUser = (userID, jobTitle, companyName, jobDescriptionText) => {
  return db.query(`INSERT INTO job_description(user_id, job_title, company_name, description) 
  VALUES ($1, $2, $3, $4) RETURNING *`, 
  [userID, jobTitle, companyName, jobDescriptionText])
  //As we are adding, we shouldnt need this function to return anything. Added the .then to check response is correct.
  .then(result => {
    console.log(result.rows[0]);
    return result.rows[0];
  })
}


/**
 * Takes the response from OpenAPI and adds the text to the database based on the jobAppID
 * @param {*} jobAppID from state/props? or another helper to getID?
 * @param {*} coverLetterText string response from OpenAPI
 * @returns nothing for now, .then added for debugging
 */
const addCoverLetterByJobDescription = (jobAppID, coverLetterText) => {
  return db.query(`UPDATE job_description SET cover_letter_text = $1 WHERE job_description.id = $2`, 
  [coverLetterText, jobAppID])
  .then(result => {
    console.log(result.rows[0]);
    return result.rows[0];
  })
}

const getAllJobAppsByUser = (user_id) => {
  return db.query('SELECT * FROM job_description WHERE user_id = $1', [user_id])
  .then(result => {
    console.log(result.rows[0]);
    return result.rows[0];
  });
};










module.exports = {addJobDescriptionByUser, addCoverLetterByJobDescription, getAllJobAppsByUser}
