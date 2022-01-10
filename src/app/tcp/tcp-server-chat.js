const net = require('net');

const server = net.createServer((socket) => {
   let address = socket.address();
    const message = 'server address is ' + JSON.stringify(address);

    // 回调函数是在数据发送完成后执行
    socket.write(message, () => {
        // socket.bytesWritten: 写出起的字节数
        const writeSize = socket.bytesWritten;

        console.log(message);
        console.log('message size is: ' + writeSize);
    });

    // data：接受到客户端的数据后，触发data事件
    socket.on('data', (data) => {
        console.log(data.toString());
        // 读取到创建到现在的总的字节数
        let bytesRead = socket.bytesRead;
        console.log('data size is :' + bytesRead);
    });
});

server.listen(8888, () => {
    const address = server.address();// 获取server绑定的信息，prot，address等信息
    console.log(address);
});





