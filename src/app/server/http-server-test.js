// 官网：https://nodejs.org/api/http.html#class-httpserver
// 中文：http://nodejs.cn/api/http.html

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

server.on("listening", ()=> {
  console.log("server is listening")
  // server.close();
})

server.on("connection", function() {
  console.log("client is connectioned")
})

server.on("close", () => {
  console.log("client is closeed")
})

