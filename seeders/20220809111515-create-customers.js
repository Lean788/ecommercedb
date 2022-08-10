'use strict';

module.exports = {
  // is executed when we do the seeding
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('customers', [{
      name: "Leandro",
      surname: "Salvado",
      email: "leandro@mail.com",
      phone: "622111222",
      address: "Calle Alfa, 1",
      city: "Málaga",
      zipCode: "29010",
      country: "Spain",
      createdAt: new Date(),
      updatedAt: new Date()
     },
    {
      name: "Berto",
      surname: "Bosco",
      email: "berto@mail.com",
      phone: "611222333",
      address: "Calle Beta, 2",
      city: "Barcelona",
      zipCode: "08010",
      country: "Spain",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Charly",
      surname: "Casado",
      email: "charly@mail.com",
      phone: "622333444",
      address: "Calle Gamma, 3",
      city: "Caceres",
      zipCode: "48010",
      country: "Spain",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    
  },

  // is executed when we undo the seed
  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('customers', {
      country: 'USA'
     }, {});
     
  }
};
