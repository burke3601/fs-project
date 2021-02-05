'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Data', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stationId: {
        type: Sequelize.STRING
      },
      level: {
        type: Sequelize.INTEGER
      },
      timeStamp: {
       type: Sequelize.DATE
      },
      river: {
        type: Sequelize.STRING
      },
      station: {
        type: Sequelize.STRING
      },
      departamento: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Data');
  }
};