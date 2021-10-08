const express = require("express");
const server = express();

// Pegar o banco de dados
const db = require("./database/db");

// configurar pasta pública
server.use(express.static("public"));

server.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
})
server.listen(3000, function() {
    console.log("Listening at the port 3000");
})