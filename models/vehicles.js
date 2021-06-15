const { Sequelize, DataType } = require('sequelize');

module.exports = (Sequelize, DataType) => {
    
  const Vehicles = Sequelize.define('Vehicles', {
        id:{
          allowNull:false,
          primaryKey:true,
          autoIncrement:true,
          type:DataType.INTEGER
        },
        modelo: {
          allowNull:false,
          type:DataType.STRING(50)
        },
        anomodelo: {
          allowNull:false,
          type:DataType.STRING(10)
        },
        anofabricacao:{
          allowNull:false,
          type:DataType.STRING(10)
        }, 
        valor:{
          allowNull:false,
          type:DataType.DOUBLE
        }, 
        tipo:{
          allowNull:false,
          type:DataType.ENUM,
          values: ['Novo', 'Semi-novo'],
          defaultValue: 'NOVO'
        }, 
        foto:{
          allowNull:true,
          type:DataType.STRING(100)
        },
        destaque:{
          allowNull:true,
          type:DataType.BOOLEAN,
        }, 
        marca_id:{
          allowNull:false,
          type:DataType.INTEGER,
          references: { model: 'Brands', key: 'id'}
        },
        cor_id:{
          allowNull:false,
          type:DataType.INTEGER,
          references: { model: 'Colors', key: 'id'}
        },
        usuario_id:{
          allowNull:false,
          type:DataType.INTEGER,
          references: { model: 'Users', key: 'id'}
        },
        opcionais:{
          allowNull:true,
          type:DataType.TEXT
        },
    })

    return Vehicles
}