const dgram = require('dgram');

// 准备要发送的消息
const message = Buffer.from('This message comes from server');

/**
 * msg: 消息内容
 * info：发送消息的对方信息
 * socket创建成功后触发事件回调
 * @type {Socket}
 */
const socket = dgram.createSocket('udp4', (msg, info) => {
    // 向客户端发消息
    /*
    message: 向客户端发送的消息内容
    offset: 发送消息内容的起始位置
    length: 发送的消息的长度
    port：发送到目标客户端的端口
    address：发送到目标客户端的地址
    callback: 发送结果回调
        error: 结果错误信息
        bytes： 发送的字节信息
     */
    socket.send(message, 0, message.length, info.port, info.address, (error, bytes) => {
        if (error) {
            console.log(error);
            throw error;
        }
        console.log('Server has sent ' + bytes + ' bytes message');
    });
});

socket.bind(9999, 'localhost', () => {
    console.log('Server has binded to 9999');
});

/*
收到客户端消息的监听事件
 */
socket.on('message', (msg, info) => {
    console.log('message event occured');
    console.log(msg.toString());
});

/*
分析：
客户端：客户端连接服务器后发送消息：This message comes from client
服务器：有两个事件
    1：客户端和服务器连接后，触发回调，向客户端发送消息：This message comes from server
    2. 服务器监听事件（message：收到消息触发事件），
客户端：收到服务器发送的消息后，也会触发message事件发送消息：message from client hello world

这时候服务器又收到客户端的事件，又触发上面的步骤
 */

