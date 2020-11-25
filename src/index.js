const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');
//const port = process.env.PORT || 3000;

var paraEnviar = [
    {
    author: "Carlos",
    text: "Hola! que tal?"
    },
    {
    author: "Pepe",
    text: "Muy bien! y tu??"
    },
    {
    author: "Paco",
    text: "Genial!"
    }
];

//initialiaation 
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

//sockets
//require('./sockets')(io);
io.on('connection', function(socket) {
    console.log('Un cliente se ha conectado');
    socket.emit('messages', paraEnviar);
});

//estoy vivo
app.get('/hola', function(req, res) {
    res.status(200).send("Hola Amiguete!");
});

//settings
app.set('port', process.env.PORT || 3000); //si hay puerto establecido lo usa y si no por defecto será el 3000

//middleware
//static files
app.use(express.static(path.join(__dirname, 'public')));
 

//starting the server
server.listen(app.get('port')), () =>{
    console.log('server running on port 3000');
}

// server.listen(8080, function() {
//         console.log('Servidor corriendo en http://localhost:8080');
//     });