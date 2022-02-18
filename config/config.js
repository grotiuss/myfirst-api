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
  // "production": {
  //   "username": DB_USERNAME,
  //   "password": DB_PASSWORD,
  //   "database": DB_DATABASE,
  //   "host": DB_HOST,
  //   "dialect": "postgres",
  //   "protocol": 'postgres',
  //   "dialectOptions": {
  //     ssl: {
  //       require: true,
  //       rejectUnauthorized: false
  //     }
  //   }
  // }
  "production": {
    "use_env_variabele": "postgres://vbfdadcnwylqws:2300de92083794989e457babf723d7a7361137cc069676d04e146fec6a3ec402@ec2-54-157-160-218.compute-1.amazonaws.com:5432/d6hojamm62k60k",
    "dialect": "postgres",
  }
};