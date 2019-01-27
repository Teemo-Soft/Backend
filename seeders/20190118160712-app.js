'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Apps',
      [
        {
          id: 1,
          name: 'Default',
          appid: '123',
          origin: 'http://localhost:4000',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: 'Client',
          appid: '123',
          origin: 'http://localhost:3000',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: 'Test',
          appid: '123',
          origin: 'http://www.teemo-soft.com/',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Apps', null, {})
  },
}
