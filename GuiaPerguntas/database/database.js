const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'helio','helio',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;