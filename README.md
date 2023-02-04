# CVAI

An app for the people

# Setup

### Version Control

1. Type `npm install -g npm@8.19.3`
2. If NVM is installed, type `nvm install 16.19.0`
3. If NVM isn't installed, go to https://github.com/nvm-sh/nvm and follow the instructions. then do step 2.

### Database

1. Enter psql by typing `psql` and type `CREATE DATABASE jobscript;` and exit by typing `\q`
2. Copy `.env.example` to `.env` and change

- DB_USER: `Your database name`
- DB_PASS: `Your database password`
- DB_NAME: `AICV`

3. CD to `api` and type `npm run db:reset` to seed database

### Run API

1. cd to `api`
2. Type `npm i` for dependencies
3. Type `npm start`

### Run Client

1. cd to `client`
2. Type `npm i` for dependencies
3. Type `npm start`

- nodemon is used so no need to restart server

## Information

- This project uses react-bootstrap, information can be found [here](https://react-bootstrap.github.io/getting-started/introduction/)
- React talks to backend with Axios
