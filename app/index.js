// const logic = require ('./modules/GameLogic');
// const constructor = require('./modules/Constructors');

// const url = require('url');

// const http = require("http");
// const fs = require("fs");
// const path = require("path");
// let arrancaServer = (puerto) => {
//     http.createServer((request, response)=> {
        
//         let URLpath = request.url;
//         console.log(URLpath);

//         //Enrutado partida
//         if(URLpath==='/partida'){
//             // response.end('LA NUEVA PARTIDA');
//             logic.winLogic();
//             constructor.players();
//         }
//         let filePath = request.url;
//         let encoding = 'UTF-8';
//         if (filePath == '/') {
//           filePath = '/login.html';
//         }
//         filePath = `${__dirname}/templates`+filePath;
//         fileExtension= path.extname(filePath);
//         switch (fileExtension) {
//             case ".css":
//                 contentType = "text/css";
//             break;
//             case ".jpg":
//                 contentType = "image/jpeg";
//                 encoding = '';
//             break;
//             case ".js":
//                 contentType = "text/javascript";
//             break;
//             case ".html":
//                 contentType = "text/html";
//             default:
//                 contentType = "text/html";
//         }
//         fs.readFile(filePath,{encoding:encoding}, (error,content)=>{
//             if(!error) {
//                 response.writeHead(200, {"Content-Type": contentType});
//                 response.write(content);
//                 response.end();
//             } else {
//             response.writeHead(404, {"Content-Type": "text/html"});
//             response.write("error file");
//             response.end();
//             }
//         })
//     }).listen(puerto);
// };
// arrancaServer(8000);

const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req,res)=>{
    res.sendFile(`${__dirname}/templates/login.html`);
});
app.get('/login.html', (req,res)=>{
    res.sendFile(`${__dirname}/templates/login.html`);
});
app.get('/register.html', (req,res)=>{
    res.sendFile(`${__dirname}/templates/register.html`);
});
app.get('/main.html', (req,res)=>{
    res.sendFile(`${__dirname}/templates/main.html`);
});
app.get('/navbar.html', (req,res)=>{
    res.sendFile(`${__dirname}/templates/navbar.html`);
});
app.get('/partida.html', (req,res)=>{
    res.sendFile(`${__dirname}/templates/partida.html`);
});
app.get('/profile.html', (req,res)=>{
    res.sendFile(`${__dirname}/templates/profile.html`);
});

app.listen(port, () => {
    console.log('Servidor en el puerto ' + port);
})