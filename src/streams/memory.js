const fs = require('fs');
const http = require('http');
const server = http.createServer();

server.on('request',(request, response) => {
    /*fs.readFile('file.txt', (err,data) => {
        if(err)
            throw err;

        response.end();
    })*/

    const readStream = fs.createReadStream('./src/streams/file.txt');
    readStream.pipe(response);
})

server.listen(2000);