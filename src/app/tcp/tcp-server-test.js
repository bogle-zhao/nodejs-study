const net = require('net');

const server = net.createServer((socket) => {
    console.log(socket.address());

    console.log('local port:' + socket.localPort);
    console.log('local address:' + socket.localAddress);
    console.log('remote port:' + socket.remotePort);
    console.log('remote family:' + socket.remoteFamily);
    console.log('remote address:' + socket.remoteAddress);
});

server.listen(8888, () => {
    const address = server.address();// 获取server绑定的信息，prot，address等信息
    console.log(address);
});





