const http = require('http');

const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello!\n');

    req.on('end', () => {
        console.log('disconnected');
    });
});

server.on('connection', () => {
    console.log('connected');
});

server.listen(port, hostname, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log(`Server running at http://${hostname}:${port}/`);
});