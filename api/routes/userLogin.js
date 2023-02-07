const express = require('express');
const router = express.Router();

const { getUserByID, getUserByEmail } = require('../db/queries/users');

// Login with userID
router.get('/user', (req, res) => {
  res.send(console.log(getUserByID));
});

module.exports = router;
