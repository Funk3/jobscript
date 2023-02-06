// All queries relating to Job Description

const db = require('./connection')



//////////////////////ADDING

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



//////////////////////UPDATING
/**
 * Takes the response from OpenAPI and adds the text to the database based on the jobDescID
 * Could also use this when clicking save after editing, so it overrides previous record?
 * @param {*} jobDescID from state/props? or another helper to getID?
 * @param {*} coverLetterText string response from OpenAPI
 * @returns nothing for now, .then added for debugging
 */
const addCoverLetterByJobDescription = (jobDescID, coverLetterText) => {
  return db.query(`UPDATE job_description SET cover_letter_text = $1 WHERE job_description.id = $2`, 
  [coverLetterText, jobDescID])
  .then(result => {
    console.log(result.rows[0]);
    return result.rows[0];
  })
}




//////////////////////GETTING

/**
 * To access all previous job descriptions instances per user for JobList and JobListItem
 * @param {*} user_id from req.session
 * @returns an array of objects, hopefully
 */
const getAllJobDescByUser = (user_id) => {
  return db.query('SELECT * FROM job_description WHERE user_id = $1', [user_id])
  .then(result => {
    console.log(result.rows[0]);
    return result.rows[0];
  });
};


/**
 * Returns an object of the job_desc for the specific job_desc ID.
 * Use to access job title, company name, cover_letter text etc
 * @param {*} jobDescID from state?
 * @returns An object containing all job_description fields
 */
const getJobDescByJobDescID = (jobDescID)=> {
  return db.query('SELECT * FROM job_description WHERE id = $1',[jobDescID] )
  .then(result => {
    console.log(result.rows[0]);
    return result.rows[0];
  });
  
}






module.exports = {addJobDescriptionByUser, addCoverLetterByJobDescription, getAllJobDescByUser, getJobDescByJobDescID}
