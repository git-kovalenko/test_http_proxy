'use strict'
let http = require('http');

http.createServer((request, response) => {
    let proxyRequest = http.request({
        host: request.headers['host'],
        port: 80,
        path: request.url,
        method: request.method,
        headers: request.headers
    }, (proxyResponse) => {
        response.writeHead(proxyResponse.statusCode, proxyResponse.headers);
        proxyResponse.pipe(response);
    });

    request.pipe(proxyRequest);
}).listen(8080);