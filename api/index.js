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

const user = require('./routes/userLogin');
const pdfRoute = require('./routes/pdfRoute');

console.log('connected');
app.use('/account', user);
app.use('/upload', pdfRoute);

app.listen(PORT, () => {
  console.log(`Jobscript Server is listening on port ${PORT}`);
});
