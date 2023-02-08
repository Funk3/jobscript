const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const { getUserByEmail, addUser } = require('../db/queries/users');

// Login with route
router.post('/login', (req, res) => {
  res.send(getUserByEmail(req.body.email));
});
module.exports = router;
