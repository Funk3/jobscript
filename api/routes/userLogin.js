const express = require('express');
const router = express.Router();
const bcrypy = require('bcrypt');

const { getUserByEmail, addUser } = require('../db/queries/users');

// Login with route
router.post('/', (req, res) => {
  const { email, password } = req;
});
module.exports = router;
