// load .env data into process.env
require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 9000;

app.use(cors());

const routes = require('./routes/routes');

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`AICV listening on port ${PORT}`);
});
