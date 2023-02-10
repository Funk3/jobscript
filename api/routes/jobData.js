const express = require('express');
const router = express.Router();
const { getAllJobDescByUser, addJobDescriptionByUser } = require('../db/queries/job_description')
const { addResumeByUser, getResumeByUser } = require('../db/queries/resume')

router.post('/pullJob', (req, res) => {
  getAllJobDescByUser(req.body.id).then(result => {
    return res.json(result)
  })
})

router.post("/pullResume", (req, res) => {
  getResumeByUser(req.body.id).then(result => {
    return res.json(result)
  })
})

router.post('/addJobDesc', (req, res) => {
  const client = req.body
  addJobDescriptionByUser(client.id, client.jobTitle, client.companyName, client.jobDescText, client.coverLetterText)
  addResumeByUser(client.id, client.uploadedFile)
})

module.exports = router