// All queries relating to Job Description

const db = require('../connection')

//////////////////////ADDING
/*
 * To add fields from job description component into job_description table, by userID
 * @param {*} userID from req.session
 * @param {*} jobTitle from input field
 * @param {*} companyName from input field
 * @param {*} jobDescriptionText from input field
 * @returns  Returns a promise, but shouldnt need to access res. Mosty just for debugging at this stage?!
 */
const addJobDescriptionByUser = (userID, jobTitle, companyName, jobDescriptionText, coverLetterText) => {
  return db.query(`INSERT INTO job_description (user_id, company_name, job_title, description, cover_letter_text) 
  VALUES ($1, $2, $3, $4, $5) RETURNING *`, [userID, companyName, jobTitle, jobDescriptionText, coverLetterText])
    .then(result => {
      return result.rows[0];
    })
}

//addJobDescriptionByUser(1, 'Google', 'Web Dev', 'Jr Web dev role at google'); //work


//////////////////////UPDATING
/**
 * Takes the response from OpenAPI and adds the text to the database based on the jobDescID
 * Could also use this when clicking save after editing, so it overrides previous record?
 * @param {*} jobDescID from state/props? or another helper to getID?
 * @param {*} coverLetterText string response from OpenAPI
 * @returns nothing for now, .then added for debugging
 */
// const addCoverLetterByJobDescription = (jobDescID, coverLetterText) => {
//   return db.query(`UPDATE job_description SET cover_letter_text = $1 WHERE job_description.id = $2`, 
//   [coverLetterText, jobDescID])
//   .then(result => {
//     console.log("addCoverLetterByJobDescription = ", result.rowCount);
//     return result.rowCount;
//   })
// }

//addCoverLetterByJobDescription(1, 'This is the incoming cover letter for job desc 1'); //works, overwrites the existing value


// //////////////////////GETTING

/**
 * To access all previous job descriptions instances per user for JobList and JobListItem
 * @param {*} user_id from req.session
 * @returns an array of objects
 */
const getAllJobDescByUser = (user_id) => {
  return db.query('SELECT * FROM job_description WHERE user_id = $1', [user_id])
    .then(result => {
      return result.rows;
    });
};

//getAllJobDescByUser(1); //works, returns array of objects

/**
 * Returns an object of the job_desc for the specific job_desc ID.
 * Use to access job title, company name, cover_letter text etc
 * @param {*} jobDescID from state?
 * @returns An object containing all job_description fields
 */
const getJobDescByJobDescID = (jobDescID) => {
  return db.query('SELECT * FROM job_description WHERE id = $1', [jobDescID])
    .then(result => {
      console.log("getJobDescByJobDescID =", result.rows[0]);
      return result.rows[0];
    });

}

//getJobDescByJobDescID(3);//works, an object of jobDesc values.





module.exports = { addJobDescriptionByUser, getAllJobDescByUser, getJobDescByJobDescID }
