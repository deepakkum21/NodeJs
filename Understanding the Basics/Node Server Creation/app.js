const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Request');
    console.log(req);
});

server.listen(7000);

