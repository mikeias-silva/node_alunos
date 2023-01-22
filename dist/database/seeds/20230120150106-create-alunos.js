"use strict";'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert(
      'alunos',
      [
        {
          nome: 'John',
          sobrenome: 'Doe',
          email: 'john@email.com',
          idade: 33,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Jean',
          sobrenome: 'Camargo',
          email: 'jean@email.com',
          idade: 25,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Gustavo',
          sobrenome: 'Moraes',
          email: 'gmg@email.com',
          idade: 23,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Bianca',
          sobrenome: 'Clemenete',
          email: 'bia@email.com',
          idade: 21,
          created_at: new Date(),
          updated_at: new Date()
        }
      ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
