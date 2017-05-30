'use strict';
let http = require('http');
let httpProxy = require('http-proxy');
let proxy = httpProxy.createProxyServer({});

http.createServer((req, res) => {
    proxy.web(req, res, {
        target:{
            host: req.headers['host'],
            port: 80
        }
    });
}).listen(3128);