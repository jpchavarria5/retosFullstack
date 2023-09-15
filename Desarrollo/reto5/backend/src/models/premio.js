const { DataTypes } = require("sequelize");
const db = require("../db/database");

const Premio = db.define('premio', {
  idPremio: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombrePremio: {
    type: DataTypes.STRING,
  },
  descripcion: {
    type: DataTypes.STRING,
    unique: true,
  },
  valor: {
    type: DataTypes.STRING,
  },
});

module.exports = Premio;