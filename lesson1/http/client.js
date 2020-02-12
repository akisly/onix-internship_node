const http = require('http');

const host = 'http://127.0.0.1';
const port = 8000;

http.get(`${host}:${port}`, res => {
    let rawData = '';
    res.on('data', (chunk) => { 
        rawData += chunk; 
    });

    res.on('end', () => {
      console.log(rawData);
    });
}).on('error', e => {
    console.error(`Got error: ${e.message}`);
});