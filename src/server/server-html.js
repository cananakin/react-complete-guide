const http = require('http');
const fs = require('fs');


const server = http.createServer((request, response) => {
    console.log('request process');

    response.writeHead(200, { 'content-type': 'text/html; charset=utf-8'});
    fs.readFile('./src/node.html', (err, data) => {
        if(err) 
            throw err;
        
        
        response.end(data);
    })
});

server.listen('2001')