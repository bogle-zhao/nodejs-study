const net = require('net');

const client = new net.Socket();
client.connect({port: 8888, host: 'localhost'}, () => {
    console.log('connected to the server');

    client.write('message from client');
});

// 服务器发送到客户端的数据事件
client.on('data', (data) => {
    console.log('data from server:' + data.toString());

    // 向服务器写数据
    client.write('hello word')
});

client.on('end', () => {
    console.log('end event')
});