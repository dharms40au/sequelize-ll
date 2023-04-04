'use strict';

const { DataTypes } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('todo', 'person_id', {
      type: DataTypes.INTEGER,
      after: 'description',
      allowNull: true,
    });

    await queryInterface.addConstraint('todo', {
      type: 'foreign key',
      fields: ['person_id'],
      name: 'fk_todo_person_person_id',
      references: {
        table: 'person',
        field: 'id',
      },
      onDelete: 'NO ACTION',
      onUpdate: 'NO ACTION',
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.removeConstraint('todo', 'fk_todo_person_person_id');

    await queryInterface.removeColumn('todo', 'person_id');
  },
};
