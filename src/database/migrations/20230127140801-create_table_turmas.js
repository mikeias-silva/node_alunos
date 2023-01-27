'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('turmas',
      {
        id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true },
        vagas: { type: Sequelize.INTEGER, allowNull: false },
        matricula_id: { type: Sequelize.INTEGER, references: { model: 'matriculas', key: 'id' } },
        professor_id: { type: Sequelize.INTEGER, references: { model: 'professores', key: 'id' } },
        created_at: { type: Sequelize.DATE, allowNull: false },
        updated_at: { type: Sequelize.DATE, allowNull: false }

      });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
