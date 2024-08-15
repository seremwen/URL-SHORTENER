const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Url = sequelize.define('Url', {
  originalUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  shortUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Url;
