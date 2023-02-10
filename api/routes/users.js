const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const { getUserByEmail, addUser } = require('../db/queries/users');

// Login with route
router.post('/login', async (req, res) => {
  const user = await getUserByEmail(req.body.email)
  res.json(user);
});

module.exports = router;
