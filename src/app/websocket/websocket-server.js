const http = require('http');
const io = require('socket.io');
const fs = require('fs');

const address = 'localhost';

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    let url = req.url;
    if (url === '/') {
        fs.readFile('./client.html', 'utf-8', (error, data) => {
            if (error) {
                console.error('error occured');
                return
            }
            // 将读取的网页返回给客户端
            res.end(data.toString);
        });
    } else {
        res.end('<html><body>Error</body></html>');
    }
});

server.listen(3000, address);
// 将server进行包装，转换为webSocket
const webSocket = io.listen(server);

webSocket.on('connection', (socket) => {
    console.log('connection has been established');

    socket.on('message', (message) => {
        console.log('message: ' + message);
    });

    socket.on('disconnect', () => {
        console.log('connection has lost');
    });

    socket.send('hello client');

    // 自定义事件:事件名称：serverEvent
    socket.emit('serverEvent', 'this is server Event');

    //监听客户端的自定义事件
    socket.on('clientEvent', (data) => {
        console.log(JSON.stringify(data));
    });

    // once:表示只响应一次，响应完后，这个监听器就会删除
    // socket.once('clientEvent', (data) => {
    //
    // });

    socket.on('broadcastEventClient', (message) => {
        console.log(message);
        // 广播所有与这个服务器建立了连接的客户端广播消息
        socket.broadcast.emit('broadcastEventServer', 'you are good!');
    });
});


