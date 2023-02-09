const express = require('express');
const router = express.Router();
const { getAllJobDescByUser } = require('../db/queries/job_description')

router.post('/pull', (req, res) => {
  console.log('req.jobDescription', req.body.id);
  getAllJobDescByUser(req.body.id).then(result => {
    return res.json(result)
  })

})

module.exports = router