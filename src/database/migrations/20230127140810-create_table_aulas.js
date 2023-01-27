'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('aulas',
      {
        id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true },
        diario_aula: { type: Sequelize.TEXT, allowNull: false },
        data_aula: { type: Sequelize.DATE, allowNull: false },
        turma_id: { type: Sequelize.INTEGER, references: { model: 'turmas', key: 'id' } },
        created_at: { type: Sequelize.DATE, allowNull: false },
        updated_at: { type: Sequelize.DATE, allowNull: false }
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('aulas');
  }
};
