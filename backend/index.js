/* esto será para cuando usemos expressJS
const express = require('express'); // para crear un servidor
const morgan = require('morgan');// muestra peticiones en el terminal
const multer = require('multer'); // permite subir fotos a una ruta determinada
const path = require('path');*/

// inicialiaciones con express
//const app = express();

//settings sin expres
const http = require('http');
const host = '127.0.0.1';
const puerto= '7000';
const server=http.createServer((request,response) => {
  response.writeHead(200, {"Content-Type" : "text/plain"});
  response.end('<h1>My APP</h1>');
});

// settings con express
//app.set('port', 7000);

// midlewares
/*app.use(morgan('dev'));
const storage = multer.diskStorage({ //define donde se colocan las imagenes y como se nombran
    destination: path.join(__dirname, 'public/uploads'),
    filename(req, file, cb){
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
})
app.use(multer({storage}).single('image')); //subira una sola imagen al servidor
app.use(express.urlencoded({extended: false})); //al rellenar formularios, crea un Json para luego ser leido facilmente
app.use(express.json()); //para poder entender json en procesos AJAX
*/
//routes
/*app.use('/api/players', require('./routes/players'));

// static files
app.use(express.static(path.join(__dirname, 'public'))); // dejamos acceso a la carpeta public desde el lado cliente
*/
//start server con express
/*app.listen(app.get('port'), () =>{
    console.log('server on port', app.get('port'));
})*/
// sin express
server.listen(puerto, host, () => {
    console.log ('el servidor esta iniciado:' + host + ":" + puerto);
})