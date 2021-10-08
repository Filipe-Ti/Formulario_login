 // importar a depedencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

 // criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db") 

 // Exporta o banco de dados
module.exports = db;

 // utilizar o objeto de banco de dados, para nossas operações
/*db.serialize(() => {

  // 1 Criar uma tabela
db.run(`
      CREATE TABLE IF NOT EXISTS dadosUsuario(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT,
        password NUMBER
      );
`)

  // 2 Inserir dados na tabela
const query =`
   INSERT INTO dadosUsuario(
       email,
       password
   ) VALUES (?,?);
`

const values = [
  "gtr@email.com",
  "76452390"
]
db.run(query, values, function(err) {
  if(err) {
    return console.log(err)
  }

  console.log("Cadastrado com sucesso");
  console.log(this)
 });


 // 3 Consultar os dados da tabela
 db.all(`SELECT * FROM dadosUsuario`, function(err, rows) {
  if(err) {
    return console.log(err)
  }

  console.log("Aqui estão seus regitros:");
  console.log(rows);
}) 

 // 4 Deletar um dado da tabela
//db.run(`DELETE FROM dadosUsuario WHERE id = ?`, [1], function(err) {
//  if(err) {
//      return console.log(err);
//    }
//    console.log("Registro deletado com sucesso!");
// });

});
/*

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