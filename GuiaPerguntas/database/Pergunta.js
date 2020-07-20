//tem a primeira letra maiscula pq é um model
 const Sequelize = require('sequelize');

 const connection = require("./database");

 const Pergunta = connection.define('perguntas',{
    titulo:{
        type: Sequelize.STRING, 
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }
 });

 //sincroniza o que esta em Pergunta com o banco de dados e cria tabela.
 Pergunta.sync({force: false}).then(() => {});

 module.exports = Pergunta;