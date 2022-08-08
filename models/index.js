'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';

//configuración
const config = require('../config/database');

//Declaración de objeto DB
const db = {};

//Inicializar la conexión
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config);

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    
    // Cada modelo que hay en el directorio lo vinculamos a nuestro objeto DB
    db[model.name] = model;
  });

  // Vincular nuestros modelos a BD
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
// Asociar los modelos
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
