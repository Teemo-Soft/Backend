'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      names: 'Super',
      lastnames: 'user',
      identification: '123456',
      gender: 'M',
      username: 'super',
      email: 'super@gmail.com',
      password: '12345678',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      names: 'Antonio',
      lastnames: 'Salcedo',
      identification: '1111111',
      gender: 'M',
      username: 'asalcedo',
      email: 'antony9409@gmail.com',
      password: '12345678',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      names: 'Jesus',
      lastnames: 'Causado',
      identification: '333333',
      gender: 'M',
      username: 'jcausado',
      email: 'blodienter@gmail.com',
      password: '12345678',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
