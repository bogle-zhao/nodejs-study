const net = require('net');

const server = net.createServer((socket) => {
    console.log('client connected');
    //将已经建立好连接的socket绑定data事件，当读取到客户端发来的数据，触发data事件
    socket.on('data', (data) => {
        console.log(data.toString());
    });
});

server.listen(8888, () => {
    const address = server.address();// 获取server绑定的信息，prot，address等信息
    console.log(address);
});





