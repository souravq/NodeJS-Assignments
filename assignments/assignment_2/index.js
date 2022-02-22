/*
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); 
*/
const fs = require("fs");
const http = require("http");
const querystring = require('querystring');
const path = require("path");


const server = http.createServer((req, res)=>{

    console.log(req.url);
 
        fs.readFile(path.join(__dirname, "index.html"), {encoding:"utf-8"}, (err, data) =>{
            res.end(data);
        })
    
   
    //res.end();
})
server.listen(5000, ()=>console.log("Server is listening"));
