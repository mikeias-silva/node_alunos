'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'alunos',
      'matricula_id', { type: Sequelize.INTEGER, references: { model: 'matriculas', key: 'id' }, onDelete: 'CASCADE' }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('matricula_id');
  }
};
