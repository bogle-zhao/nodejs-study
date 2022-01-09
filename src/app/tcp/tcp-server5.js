const net = require('net');

const server = net.createServer((socket) => {
    console.log('client connected');

    // 限制最多只有两个客户端连接到服务器,如果有多余2个的连接都被拒绝
    server.maxConnections = 2;

    /**
     * count: 客户端连接的数量
     */
    server.getConnections((error, count) => {
        console.log('client count:' + count);
    });
});

server.listen(8888, () => {
    const address = server.address();// 获取server绑定的信息，prot，address等信息
    console.log(address);
});





