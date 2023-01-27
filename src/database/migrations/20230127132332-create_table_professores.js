'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'professores', {
        id: { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
        nome: { type: Sequelize.STRING, allowNull: false },
        sobrenome: { type: Sequelize.STRING, allowNull: false },
        usuario_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'usuarios', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },
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
    await queryInterface.dropTable('professores');
  }
};
