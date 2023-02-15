# Jobscript

Jobscript is a SPA that takes your resume (uploaded as a PDF) and job description and generates a cover letter using the OpenAI api.

# Screenshots

### Landing Page

![Landing Page](https://github.com/Funk3/jobscript/blob/main/screenshots/landingPage.png)

### Empty Main Page

![Empty Main Page](https://github.com/Funk3/jobscript/blob/main/screenshots/emptyForm.png)

### Generated Cover Letter Page

![Generated Cover Letter Page](https://github.com/Funk3/jobscript/blob/main/screenshots/filledForm.png)

# Setup

### Version Control

1. Type `npm install -g npm@8.19.3`
2. If NVM is installed, type `nvm install 16.19.0`
3. If NVM isn't installed, go to https://github.com/nvm-sh/nvm and follow the instructions. then do step 2.

### Run API

1. cd to `api`
2. Type `npm i` for dependencies
3. Type `npm start`

### Database

1. Enter psql by typing `psql` and type `CREATE DATABASE jobscript;` and exit by typing `\q`
2. Copy `.env.example` to `.env` and change

- DB_USER: `Your database name`
- DB_PASS: `Your database password`
- DB_NAME: `jobscript`
- OPEN_API_KEY: `your secret token`

3. CD to `api` and type `npm run db:reset` to seed database

- nodemon is used so no need to restart server

### Run Client

1. cd to `client`
2. Type `npm i` for dependencies
3. Type `npm start`

## Information

- This project uses react-bootstrap, information can be found [here](https://react-bootstrap.github.io/getting-started/introduction/)
- Favicon icon attribution : <a href="https://www.flaticon.com/free-icons/letter" title="letter icons">Letter icons created by Freepik - Flaticon</a>
