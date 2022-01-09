const http = require('http');


let resData = '';

const option = {
    'host': 'localhost',
    'port': '3000'
}

const request = http.request(option);

// 请求响应事件
request.on('response', function (res) {
    // 请求响应接受数据事件
    res.on('data', function (chunk) {
        resData += chunk;
    });

    res.on('end', function () {
        console.log(resData);
    });
}).end();

