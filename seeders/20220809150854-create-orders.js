'use strict';

const { faker } = require('@faker-js/faker');
// const { Customer } = require('../models/Customer');


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Orders', [
    {
      amount: faker.finance.amount(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      amount: faker.finance.amount(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      amount: faker.finance.amount(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      amount: faker.finance.amount(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      amount: faker.finance.amount(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      amount: faker.finance.amount(),
      createdAt: new Date(),
      updatedAt: new Date()
    },

  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Orders', null, {});
  }
};