'use strict';

const { faker } = require('@faker-js/faker');

module.exports = {

  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Orders', [

      {
        name: faker.name.firstName(),
        surname: faker.name.lastName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
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
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ]);

  },


  async down (queryInterface, Sequelize) {
    
    return await queryInterface.bulkDelete('customers', null, {});
     
  }
};
