//Queries relating to users

const db = require('./connection');

const getUserByID = (id) => {
  return db
    .query(`SELECT * FROM users WHERE id = $1;`, [id])
    .then((user) => {
      return user.rows[0] || null;
    })
    .catch((error) => console.log(error));
};

const getUserByEmail = (email) => {
  return db
    .query(`SELECT * FROM users WHERE email = $1;`, [email])
    .then((user) => {
      return user.rows[0] || null;
    })
    .catch((error) => console.log(error));
};

module.exports = { getUserByID, getUserByEmail };
