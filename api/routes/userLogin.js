const express = require('express');
const router = express.Router();

const { getUserByID } = require('../db/queries/users');

//Hello World!
router.get('/', (req, res) => {
  res.send('Hello World!');
});

// Login with userID
router.get('/user', (req, res) => {
  res.send
})

module.exports = router;
