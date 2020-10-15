const http = require("http");
const fs = require("fs");
const path = require("path");
let arrancaServer = (puerto) => {
    http.createServer((request, response)=> {
        let filePath = request.url;
        let encoding = 'UTF-8';
        if (filePath == '/') {
          filePath = 'login.html';
        }
        filePath = `${__dirname}/templates`+filePath;
        fileExtension= path.extname(filePath);
        switch (fileExtension) {
            case ".css":
                contentType = "text/css";
            break;
            case ".jpg":
                contentType = "image/jpeg";
                encoding = '';
            break;
            case ".js":
                contentType = "text/javascript";
            break;
            case ".html":
                contentType = "text/html";
            default:
                contentType = "text/html";
        }
        fs.readFile(filePath,{encoding:encoding}, (error,content)=>{
            if(!error) {
                response.writeHead(200, {"Content-Type": contentType});
                response.write(content);
                response.end();
            } else {
            response.writeHead(404, {"Content-Type": "text/html"});
            response.write("error file");
            response.end();
            }
        })
    }).listen(puerto);
};
arrancaServer(8000);