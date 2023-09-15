const { DataTypes } = require("sequelize");
const db = require("../db/database");

const Empleado = db.define('empleado', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  documento: {
    type: DataTypes.BIGINT,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  apellido: {
    type: DataTypes.STRING,
  },
  telefono: {
    type: DataTypes.STRING,
  },
  correo: {
    type: DataTypes.STRING,
    unique: true,
  },
});

module.exports = Empleado;