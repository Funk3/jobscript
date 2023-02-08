const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const { getUserByEmail, addUser } = require('../db/queries/users');

// Login with route
router.post('/login', (req, res) => {
  //res.json(getUserByEmail(req.body.email));
  console.log('req.body', req.body);
  const email = req.body.email;
  const user = {
    id: 1,
    email: email,
    name: 'Zak',
  };
  res.json(user);
});

module.exports = router;
