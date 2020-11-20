const express = require('express');
const path = require('path');
//const socketIO = require('socket.io');
const http = require('http');

//initialiaation 
const app = express();
const server = http.createServer(app);
//const io = socketIO(server);

//sockets
//require('./sockets')(io);

//settings
app.set('port', process.env.PORT || 3000); //si hay puerto establecido lo usa y si no por defecto será el 3000

//static files
app.use(express.static(path.join(__dirname, 'public')));
//middlewares 

// starting the server
server.listen(app.get('port')), () =>{
    console.log('server running on port 3000');
}
