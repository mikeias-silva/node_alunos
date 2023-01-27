'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'matriculas',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        status_matricula: {
          type: Sequelize.ENUM(
            'Matriculado',
            'Não Matriculado',
            'Aguardando confirmação de turma',
            'Espera de vagas'
          )
        },
        turma_id: { type: Sequelize.INTEGER, references: { model: 'turmas', key: 'id' } },
        created_at: { type: Sequelize.DATE, allowNull: false },
        updated_at: { type: Sequelize.DATE, allowNull: false }

      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('matriculas');
  }
};
