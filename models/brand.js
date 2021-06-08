const {
    Sequelize,
    DataType
} = require("sequelize");

module.exports = (Sequelize, DataType) => {
    const Brand = Sequelize.define('Brand', {
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
    return Brand
}