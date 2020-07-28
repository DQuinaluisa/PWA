const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Usuario extends Model {}

Usuario.init({
    
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    identificacion: DataTypes.STRING,
    direccion: DataTypes.STRING
},{
    sequelize,
    modelName: "usuario"
});

module.exports = Usuario;