require('dotenv').config();

const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

module.exports = {
  // "development": {
  //   "username": DB_USERNAME,
  //   "password": DB_PASSWORD,
  //   "database": DB_DATABASE,
  //   "host": DB_HOST,
  //   "dialect": "postgres"
  // },
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_DATABASE,
    "host": DB_HOST,
    "dialect": "postgres",
    "protocol": 'postgres',
    "dialectOptions": {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  },

  "test": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_DATABASE,
    "host": DB_HOST,
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.PG_USER,
    "password": process.env.PG_PASSWORD,
    "database": process.env.PG_DATABASE,
    "host": process.env.PG_HOST,
    "dialect": "postgres",
    "protocol": 'postgres',
    "dialectOptions": {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
};