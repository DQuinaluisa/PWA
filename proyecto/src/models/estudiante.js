const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Estudiante extends Model {}

Estudiante.init({
    
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    identificacion: DataTypes.STRING,
    direccion: DataTypes.STRING,
    imagePath: DataTypes.STRING
},{
    sequelize,
    modelName: "estudiante"
});

module.exports = Estudiante;