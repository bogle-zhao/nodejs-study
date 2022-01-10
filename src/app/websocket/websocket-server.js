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
});


