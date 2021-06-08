const {
    Sequelize,
    DataType
} = require("sequelize");

module.exports = (Sequelize, DataType) => {
    const Colors = Sequelize.define('Colors', {
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
    })
    return Colors
}