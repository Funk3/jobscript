const express = require('express');
const router = express.Router();
const { getAllJobDescByUser, addJobDescriptionByUser } = require('../db/queries/job_description')

router.post('/pullJob', (req, res) => {
  getAllJobDescByUser(req.body.id).then(result => {
    return res.json(result)
  })
})

router.post('/addJobDesc', (req, res) => {
  const client = req.body
  addJobDescriptionByUser(client.id, client.jobTitle, client.companyName, client.jobDescText, client.coverLetterText).then(result => {
    console.log("result", result)
  })
})
module.exports = router