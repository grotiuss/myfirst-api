'use strict';
const {
  Model
} = require('sequelize');

//For password encryption
const bcrypt = require('bcrypt')

//for API Session
const jwt = require('jsonwebtoken')

module.exports = (sequelize, DataTypes) => {
  class User_account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static #encrypt = (password) => bcrypt.hashSync(password, 10)

    static encrypt = (password) => bcrypt.hashSync(password, 10)

    static register = ({ username, password }) => {
      const encryptedPassword  = this.#encrypt(password)
      return this.create({ username, password: encryptedPassword, asAdmin: false })
    }

    checkPassword = (password) => bcrypt.compareSync(password, this.password)

    static findAllUsers = async() => {
      // const [result, metadata] =  await sequelize.query('SELECT * FROM "User_accounts";')
      const [datas, result1] = await sequelize.query('SELECT * FROM "User_accounts";', {
        QueryTypes: 'SELECT'
      })
      return datas
    }

    generateToken = () => {
      const payload = {
        id: this.id,
        username: this.username,
        asAdmin: this.asAdmin
      }
      const secret = process.env.JWT_SECRET || 'ankjdsnjkkjnfadnkjd'
      const token = jwt.sign(payload, secret)
      return token
    }

    static authenticate = async({ username, password }) => {
      try {
        const user = await this.findOne({ where: { username } })
        if(!user)
          return({
            status: 202,
            result: 'FAILED',
            message: 'User not found'
          })
        const isPasswordValid = user.checkPassword(password)
        if(!isPasswordValid)
          return({
            status: 202,
            result: 'FAILED',
            message: 'Wrong password!'
          })
        return({
          status: 202,
          result: 'SUCCESS',
          message: 'Login success! :D',
          data: user
        })
      } catch(error) {
          return({
            status: 500,
            result: 'ERROR',
            error: error
          })
      }
    }

  };
  User_account.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    asAdmin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User_account',
  });
  return User_account;
};