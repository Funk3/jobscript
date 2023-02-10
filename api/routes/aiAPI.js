const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.post('/openai', (req, res) => {
  const apiKey = process.env.OPENAI_API_KEY;
  const client = req.body
  const params = {
    prompt: `RESUME = "${client.uploadedFile}". JOB DESCRIPTION = "${client.jobDescText}". Use only the information from the RESUME to write a Cover Letter based on the JOB DESCRIPTION. ${client.toneAPIString}`,
    model: 'text-davinci-003',
    max_tokens: 2000,
    temperature: 0,
  };

  const headers = {
    Authorization: 'Bearer ' + apiKey
  };

  return axios
    .post('https://api.openai.com/v1/completions', params, {
      headers: headers,
    })
    .then((result) => {
      console.log("API response = ", result.data.choices[0].text)
      res.send(result.data.choices[0].text);
    })
})

module.exports = router;

