'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'turmas',
      'professor_id', { type: Sequelize.INTEGER, references: { model: 'professores', key: 'id' } }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('professor_id');
  }
};
