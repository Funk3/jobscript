// load .env data into process.env
require('dotenv').config();

const express = require('express');
const router = express.Router();

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const completion = await openai.createCompletion({
  model: "text-davinci-002",
  prompt: "Hello world",
});
console.log(completion.data.choices[0].text);

module.exports = router;
