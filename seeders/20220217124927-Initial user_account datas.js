'use strict';

var faker = require('faker')

const { User_account } = require('../models')

const users = [
  {
    username: 'admin',
    password: User_account.encrypt('admin'),
    asAdmin: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

const user1 = [...Array(99)].map(user => (
  {
    username: faker.internet.userName(),
    password: User_account.encrypt(faker.internet.password()),
    asAdmin: false,
    createdAt: new Date(),
    updatedAt: new Date()
  }
))

users.push(...user1)

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('User_accounts', users, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('User_accounts', null, {})
  }
};
