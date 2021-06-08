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
        type:Sequelize.DATE
      },
      anofabricacao:{
        allowNull:false,
        type:Sequelize.DATE
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
      fotoDestaque:{
        allowNull:false,
        type:Sequelize.STRING(50)
      }, 
      marca_id:{
        allowNull:false,
        type:Sequelize.INTEGER,
        refereces: { model: 'brand', key: 'id'}
      },
      cor_id:{
        allowNull:false,
        type:Sequelize.INTEGER,
        refereces: { model: 'colors', key: 'id'}
      },
      usuario_id:{
        allowNull:false,
        type:Sequelize.INTEGER,
        refereces: { model: 'users', key: 'id'}
      },
      opcionais:{
        allowNull:false,
        type:Sequelize.TEXT
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
