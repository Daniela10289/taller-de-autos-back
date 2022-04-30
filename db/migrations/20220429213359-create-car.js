'use strict';

const { CarSchema, CAR_TABLE } = require('./../models/carModel')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(CAR_TABLE, CarSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(CAR_TABLE);
  }
};
