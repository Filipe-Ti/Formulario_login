const express = require('express');
const server = express();

// configurar pasta pública
server.use(express.static("public"));

server.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

server.post('/cad', (req, res) => {

});
 
server.listen(3000, function() {
    console.log('Ok');
})