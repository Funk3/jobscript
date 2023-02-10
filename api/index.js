// load .env data into process.env
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const users = require('./routes/users');
const pdfRoute = require('./routes/pdfRoute');
const jobData = require('./routes/jobData');
const aiAPI = require('./routes/aiAPI');

app.use('/api/users', users);
app.use('/api/pdf', pdfRoute);
app.use('/api/joblist', jobData);
app.use('/api/ai', aiAPI)

app.listen(PORT, () => {
  console.log(`Jobscript Server is listening on port ${PORT}`);
});
