'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id:{
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        type:Sequelize.INTEGER
      },
      nome: {
        allowNull:false,
        type:Sequelize.STRING(100)
      },
      login: {
        allowNull:false,
        type:Sequelize.STRING(20)
      },
      senha:{
        allowNull:false,
        type:Sequelize.STRING(100)
      }, 
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
