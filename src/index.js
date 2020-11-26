const express = require('express');
const path = require('path');
const http = require('http');

//initialiaation 
const app = express();
const server = http.createServer(app);

//settings
app.set('port', process.env.PORT || 3000); //si hay puerto establecido lo usa y si no por defecto será el 3000

//static files
app.use(express.static(path.join(__dirname, 'public')));
//middlewares 

// starting the server
server.listen(app.get('port')), () =>{
    console.log('server running on port 3000');
}

//sockets
const socketIO = require('socket.io');
const io = socketIO(server);



  io.on('connection', (socket) => {
      console.log('new User connected with socketId', socket.id);
      socket.on('disconnect', () => {
      console.log('A user with socketId' , socket.id, 'has disconnected.');
    })
    });
  
    
  
  
  








