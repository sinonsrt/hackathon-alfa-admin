const {
    Sequelize,
    DataType
} = require("sequelize");

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
          type:DataType.DATE
        },
        anofabricacao:{
          allowNull:false,
          type:DataType.DATE
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
        fotoDestaque:{
          allowNull:false,
          type:DataType.STRING(50)
        }, 
        marca_id:{
          allowNull:false,
          type:DataType.INTEGER,
          refereces: { model: 'brand', key: 'id'}
        },
        cor_id:{
          allowNull:false,
          type:DataType.INTEGER,
          refereces: { model: 'colors', key: 'id'}
        },
        usuario_id:{
          allowNull:false,
          type:DataType.INTEGER,
          refereces: { model: 'users', key: 'id'}
        },
        opcionais:{
          allowNull:false,
          type:DataType.TEXT
        },
    })
    return Vehicles
}