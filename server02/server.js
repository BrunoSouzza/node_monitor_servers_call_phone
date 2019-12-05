const http = require("http");

http.createServer((req,res) => {
    res.write("Server02");
    res.end();
}).listen(40002)