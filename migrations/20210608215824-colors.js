'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Colors', {
      id:{
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        type:Sequelize.INTEGER
      },
      cor: {
        allowNull:false,
        type:Sequelize.STRING(50)
      },
      createdAt:{
        allowNull:false,
        type:Sequelize.DATE
      },
      updatedAt:{
        allowNull:false,
        type:Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
