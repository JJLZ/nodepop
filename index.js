/**
 * Created by JJLZ on 10/31/16.
 */

var http = require('http');

var server = http.createServer(function (request, response) {

    response.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
});

server.listen(1337, '127.0.0.1');
console.log('Servidor arrancado en http://127.0.0.1:1337');
console.log('OK');