/*
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dados_login', 'protec', '1234', {
      host: 'localhost',
      dialect: 'sqlite'
});

sequelize.authenticate().then(function () {
    console.log('Conexão realizada com sucesso');
}).catch(function (err) {
    console.log('Erro ao realizar a conexão com BD: ' + err);
});




 Criando tabelas(models) com sequelize:
Usando sequelize.define:
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true
*/