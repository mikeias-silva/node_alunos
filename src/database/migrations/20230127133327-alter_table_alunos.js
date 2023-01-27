'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'alunos',
      'usuario_id',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        refences: {
          model: 'usuarios',
          key: 'id'
        },
        onDelete: 'CASCADE'
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('usuario_id');
  }
};
