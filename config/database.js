const Sequelize = require('sequelize');

module.exports = new Sequelize('findmyevent', 'postgres', '5C5Y*Dffk#', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});