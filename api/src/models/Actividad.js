const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('actividad', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dificultad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    duracion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    temporada: {
      type: DataTypes.ENUM,
      values: ['Verano', 'Otoño', 'Invierno', 'Primavera'],
      allowNull: false
    },
    imagen: {
      type: DataTypes.STRING,
      validate:{
        isUrl: true
      }
    }
  });
};