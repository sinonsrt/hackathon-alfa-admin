const {
    Sequelize,
    DataType
} = require("sequelize");

module.exports = (Sequelize, DataType) => {
    const Brands = Sequelize.define('brands', {
        id:{
          allowNull:false,
          primaryKey:true,
          autoIncrement:true,
          type: DataType.INTEGER
        },
        marca: {
          allowNull:false,
          type: DataType.STRING(50)
        },
    })
    return Brands
}