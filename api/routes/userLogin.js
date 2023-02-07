const express = require('express');
const router = express.Router();
const bcrypy = require('bcrypt');

const { getUserByEmail, addUser } = require('../db/queries/users');

// Login with userID
router.get('/user', (req, res) => {
  res.send(console.log(getUserByID(1)));
});

module.exports = router;
