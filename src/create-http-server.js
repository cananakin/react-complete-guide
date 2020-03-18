const http = require('http');

const server = http.createServer((request, response) => {
    response.write('<b>Hello</b> World');
    response.end();
});

server.listen(2000)