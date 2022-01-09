const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    let data = '';// let 声明变量

    // 接受数据事件
    // 持续的接受数据事件，将接受的数据拼接起来
    req.on('data', function (chunk) {
        data += chunk;
    });

    // 接受请求数据完成事件
    req.on('end', function () {
        let method = req.method;
        // 将对象转成json数据
        let headers = JSON.stringify(req.headers);
        let httpVersion = req.httpVersion;
        let requestUrl = req.url;

        res.writeHead(200, {'Content-type': 'text/html'})

        let resData = method + ', ' + headers + ', ' + httpVersion + ', ' + requestUrl;

        res.end(resData);
    });

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});