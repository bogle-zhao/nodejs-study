const net = require('net');

const server = net.createServer((socket) => {
    console.log('client connected');
});

server.listen(8888, () => {
    const address = server.address();// 获取server绑定的信息，prot，address等信息
    console.log(address);
});





