const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('urlshortener', 'postgres', 'ngonis', {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;

