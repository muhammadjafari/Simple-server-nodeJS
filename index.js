const http = require("node:http");

const server = http.createServer( (req,res) => {
    res.writeHead(200);
    res.end("hello buddy");
})

server.listen(3000);