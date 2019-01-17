'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        firstName: 'Super',
        lastName: 'user',
        gender: 'M',
        username: 'super',
        email: 'super@gmail.com',
        password: '12345678'
      },
      {
        firstName: 'Antonio',
        lastName: 'Salcedo',
        gender: 'M',
        username: 'asalcedo',
        email: 'antony9409@gmail.com',
        password: '12345678'
      },
      {
        firstName: 'Jesus',
        lastName: 'Causado',
        gender: 'M',
        username: 'jcausado',
        email: 'blodienter@gmail.com',
        password: '12345678'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
