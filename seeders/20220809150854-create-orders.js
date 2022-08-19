'use strict';

const { faker } = require('@faker-js/faker');
// const { Customer } = require('../models/Customer');


module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Orders', [
    {
      amount: faker.finance.amount(),
      createdAt: new Date(),
      updatedAt: new Date(),
      customerId: 4
    },
    {
      amount: faker.finance.amount(),
      createdAt: new Date(),
      updatedAt: new Date(),
      customerId: 1
    },
    {
      amount: faker.finance.amount(),
      createdAt: new Date(),
      updatedAt: new Date(),
      customerId: 3
    },
    {
      amount: faker.finance.amount(),
      createdAt: new Date(),
      updatedAt: new Date(),
      customerId: 3
    },
    {
      amount: faker.finance.amount(),
      createdAt: new Date(),
      updatedAt: new Date(),
      customerId: 1
    },
    {
      amount: faker.finance.amount(),
      createdAt: new Date(),
      updatedAt: new Date(),
      customerId: 5
    },

  ], {});
  },
  
  down: async(queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};