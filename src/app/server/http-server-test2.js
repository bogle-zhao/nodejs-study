const http = require('http');
const httpServer = new http.Server();

httpServer.on("request", function (req, resp) {
    resp.writeHead(200, {'Content-type': 'text/plain'});
    resp.end("hello node.js");
});

httpServer.listen(3001, function () {
    console.log("node server started on port 3001");
});