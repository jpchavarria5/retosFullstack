const { DataTypes } = require("sequelize");
const db = require("../db/database");

const Puntajes = db.define('puntajes', {
  idPuntaje: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  idEmpleado: {
    type: DataTypes.INTEGER,
  },
  idPremio: {
    type: DataTypes.INTEGER,
  },
  puntosObtenidos: {
    type: DataTypes.INTEGER,
  },
  fecha: {
    type: DataTypes.STRING,
  },
});

module.exports = Puntajes;