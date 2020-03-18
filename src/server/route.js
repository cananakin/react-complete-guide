const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {'content-type' : 'text/html; charset=utf-8'});

    if(request.method === 'GET'){
        if(request.url === '/'){
            response.write('In index page');
        }else if(request.url === '/contact'){
            response.write('In Contact Page');
        }else
            response.write('Page not found');
    
        response.end()
    }
});

server.listen(2000)