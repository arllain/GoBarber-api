<h1 align="center">
  <img alt="gobarber" src=".github/logo.svg" width="200px">
</h1>

<h3 align="center">
  Rest API for GoBarber apps
</h3>

<p align="center">Schedule Haircuts & Shaves services</p>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/arllain/gobarber-api?color=%23FF9000">

  <a href="https://www.linkedin.com/in/arllain/" target="_blank" rel="noopener noreferrer">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-arllain-%23FF9000">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/arllain/gobarber-api?color=%23FF9000">

  <a href="https://github.com/arllain/gobarber-api/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/arllain/gobarber-api?color=%23FF9000">
  </a>

  <a href="https://github.com/arllain/gobarber-api/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/arllain/gobarber-api?color=%23FF9000">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/arllain/gobarber-api?color=%23FF9000">
</p>

<p align="center">
  <a href="#%EF%B8%8F-about-the-project">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-running-tests">Running tests</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

<p id="insomniaButton" align="center">
  <a href="https://insomnia.rest/run/?label=PontoLoc&uri=https%3A%2F%2Fraw.githubusercontent.com%2Farllain%2Fpontoloc-api%2Fmaster%2FInsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

## 🧐 About

This api is to be consumed by GoBarber Web and GoBarber Mobile, where you can make appointments between barbers and customers.

To see the **web client**, click here: [GoBarber Web](https://github.com/arllain/gobarber-web)<br />
To see the **mobile client**, click here: [GoBarber Mobile](https://github.com/arllain/gobarber-mobile)

## 🚀 Technologies

Technologies that I used to develop this api

- [Node.js](https://nodejs.org/en/)
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js)
- [celebrate](https://github.com/arb/celebrate)
- [class-transformer](https://github.com/typestack/class-transformer)
- [cors](https://github.com/expressjs/cors)
- [Date-fns](https://date-fns.org/)
- [dotenv](https://github.com/motdotla/dotenv)
- [Express](https://expressjs.com/pt-br/)
- [express-async-errors](https://github.com/davidbanham/express-async-errors)
- [handlebars](https://github.com/ericf/express-handlebars)
- [ioredis](https://github.com/luin/ioredis)
- [Multer](https://github.com/expressjs/multer)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/#/)
- [JWT-token](https://jwt.io/)
- [uuid v4](https://github.com/thenativeweb/uuidv4/)
- [PostgreSQL](https://www.postgresql.org/)
- [MongoDB](https://www.mongodb.com/)
- [Redis](https://redis.io/)
- [Jest](https://jestjs.io/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## 💻 Getting started

Import the `Insomnia.json` on Insomnia App or click on [Run in Insomnia](#insomniaButton) button

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [MongoDB](https://www.mongodb.com/)
- [Redis](https://redis.io/)

> Obs.: I recommend use docker

**Clone the project and access the folder**

```bash
$ git clone https://github.com/arllain/gobarber-api.git && cd gobarber-api
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables.
# The aws variables do not need to be filled for dev environment
$ cp .env.example .env

# Create the instance of postgreSQL using docker
$ docker run --name gobarber-postgres -e POSTGRES_USER=docker \
              -e POSTGRES_DB=gobarber -e POSTGRES_PASSWORD=docker \
              -p 5432:5432 -d postgres

# Create the instance of mongoDB using docker
$ docker run --name gobarber-mongodb -p 27017:27017 -d -t mongo

# Create the instance of redis using docker
$ docker run --name gobarber-redis -p 6379:6379 -d -t redis:alpine

# Make a copy of 'ormconfig.example.json' to 'ormconfig.json'
# and set the values, if they are not filled,
# to connect with docker database containers
$ cp ormconfig.example.json ormconfig.json

# Once the services are running, run the migrations
$ yarn typeorm migration:run

# To finish, run the api service
$ yarn dev:server

# Well done, project is started!
```

## 🔧 Running the tests <a name = "tests"></a>
```bash
# Run the jest tests
$ yarn test

```


## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💜 by Arllain 👋 [See my linkedin](https://www.linkedin.com/in/arllain/)
