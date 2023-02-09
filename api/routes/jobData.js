const express = require('express');
const router = express.Router();
const { getAllJobDescByUser, addJobDescriptionByUser } = require('../db/queries/job_description')

router.post('/pullJob', (req, res) => {
  getAllJobDescByUser(req.body.id).then(result => {
    return res.json(result)
  })
})

router.post('/addJobDesc', (req, res) => {
  console.log('req', req.body.id)
  addJobDescriptionByUser(req.body.id).then(result => {
    console.log("result", result)
  })
})
module.exports = router