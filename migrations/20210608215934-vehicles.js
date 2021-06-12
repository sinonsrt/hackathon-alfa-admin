'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Vehicles', {
      id:{
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        type:Sequelize.INTEGER
      },
      modelo: {
        allowNull:false,
        type:Sequelize.STRING(50)
      },
      anomodelo: {
        allowNull:false,
        type:Sequelize.STRING(10)
      },
      anofabricacao:{
        allowNull:false,
        type:Sequelize.STRING(10)
      }, 
      valor:{
        allowNull:false,
        type:Sequelize.DOUBLE
      }, 
      tipo:{
        allowNull:false,
        type:Sequelize.ENUM,
        values: ['Novo', 'Semi-novo'],
        defaultValue: 'NOVO'
      }, 
      foto:{
        allowNull:true,
        type:Sequelize.STRING(200)
      }, 
      destaque:{
        allowNull:true,
        type:Sequelize.BOOLEAN,
      },
      marca_id:{
        allowNull:false,
        type:Sequelize.INTEGER,
        references: { model: 'Brands', key: 'id'}
      },
      cor_id:{
        allowNull:false,
        type:Sequelize.INTEGER,
        references: { model: 'Colors', key: 'id'}
      },
      usuario_id:{
        allowNull:false,
        type:Sequelize.INTEGER,
        references: { model: 'Users', key: 'id'}
      },
      opcionais:{
        allowNull:true,
        type:Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
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
