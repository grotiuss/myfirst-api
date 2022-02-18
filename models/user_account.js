'use strict';
const {
  Model
} = require('sequelize');

//For password encryption
const bcrypt = require('bcrypt')

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