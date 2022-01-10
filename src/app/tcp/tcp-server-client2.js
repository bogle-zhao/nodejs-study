const net = require('net');

const client = new net.Socket();
client.connect({port: 8888, host: 'localhost'}, () => {
    console.log('connected to the server')
});

// 服务器发送到客户端的数据事件
client.on('data', (data) => {
    console.log('data:' + data.toString());
});