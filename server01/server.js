const http = require('http');

http.createServer((req, res) => {
    res.write("Server01");
    res.end();
}).listen(40001);