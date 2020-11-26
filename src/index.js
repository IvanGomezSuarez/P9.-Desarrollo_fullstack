const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');
const randomColor = require('randomcolor');
const createBoard = require('./create-board');
const createCooldown = require('./create-cooldown');

//initialiaation 
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const { clear, getBoard, makeTurn } = createBoard(8);

io.on('connection', (sock) => {
  const color = randomColor();
  const cooldown = createCooldown(2000);
  sock.emit('board', getBoard());

  sock.on('message', (text) => io.emit('message', text));
  sock.on('turn', ({ x, y }) => {
    if (cooldown()) {
      const playerWon = makeTurn(x, y, color);
      io.emit('turn', { x, y, color });

      if (playerWon) {
        sock.emit('message', '¡Bingo, ganaste crack!');
        io.emit('message', '¿Jugamos otra vez?');
        clear();
        io.emit('board');
      }
    }
  });
});

//settings
app.set('port', process.env.PORT || 3000); //si hay puerto establecido lo usa y si no por defecto será el 3000

//static files
app.use(express.static(path.join(__dirname, 'public')));
//middlewares 

// starting the server
server.listen(app.get('port')), () =>{
    console.log('server running on port 3000');
}