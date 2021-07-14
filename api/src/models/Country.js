const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    ID: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bandera: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isUrl: true
      }
    },
    continente: {
      type: DataTypes.ENUM,
      values: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Polar', ''],
      // allowNull: false
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.INTEGER,
    },
    poblacion: {
      type: DataTypes.INTEGER,
    },

  });
};
