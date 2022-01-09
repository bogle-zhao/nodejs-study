const net = require('net');

const server = net.createServer((socket) => {
    console.log('client connected');
});
server.listen(8888);
server.on('listening', function () {
    console.log('server is listening');
});



