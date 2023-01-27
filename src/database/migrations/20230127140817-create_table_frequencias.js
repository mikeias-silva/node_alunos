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
    await queryInterface.createTable(
      'frequencias',
      {
        id: { type: Sequelize.INTEGER },
        matricula_id: { type: Sequelize.INTEGER, references: { model: 'matriculas', key: 'id' } },
        data: { type: Sequelize.DATE, allowNull: false },
        presente: { type: Sequelize.BOOLEAN, allowNull: false },
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
