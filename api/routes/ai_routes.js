const axios = require('axios');

// load .env data into process.env
require('dotenv').config();

const apiKey = process.env.OPENAI_API_KEY;

const client = axios.create({
  headers: {
    Authorization: 'Bearer ' + apiKey,
  },
});

const params = {
  prompt: 'Write a cover letter with this',
  model: 'text-davinci-003',
  max_tokens: 2000,
  temperature: 0,
};

client
  .post('https://api.openai.com/v1/completions', params)
  .then((result) => {
    console.log(result.data.choices[0].text);
  })
  .catch((err) => {
    console.log(err);
  });
