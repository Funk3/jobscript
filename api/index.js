// load .env data into process.env
require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes/routes');
const pdfRoute = require('./routes/pdfRoute');

app.use('/', routes);
app.use('/pdf', pdfRoute);

app.listen(PORT, () => {
  console.log(`Jobscript Server is listening on port ${PORT}`);
});
