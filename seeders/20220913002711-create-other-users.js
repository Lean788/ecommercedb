'use strict';

const { faker } = require('@faker-js/faker');

module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [

      {
        name: faker.name.firstName(),
        surname: faker.name.lastName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
        rol: "customer",
        createdAt: new Date(),
        updatedAt: new Date()        
      },
      {
        name: faker.name.firstName(),
        surname: faker.name.lastName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
        rol: "customer",
        createdAt: new Date(),
        updatedAt: new Date()        
      },
      {
        name: faker.name.firstName(),
        surname: faker.name.lastName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
        rol: "customer",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ], {});

  },


  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('users', null, {});
     
  }
};