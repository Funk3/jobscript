const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.post('/openai', (req, res) => {
  const apiKey = process.env.OPENAI_API_KEY;
  const client = req.body
  const params = {
    prompt: `Write a cover letter using the provided resume and job description below. Use only the education and skills from the resume. If the job description contains requirements, use the education and skills from the resume instead. Write it in a ${client.customTone} tone.
    
    resume = "${client.uploadedFile}"
    job description = "${client.jobDescText}"`,

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
      console.log("API responded")
      res.send(result.data.choices[0].text);
    })
    .catch((err) => {
      console.log("Api Call Error", err.response)
    })
})

module.exports = router;

