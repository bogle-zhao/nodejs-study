const http = require('http');

let resData = '';

http.request({
    'host': 'localhost',
    'port': '3000',
    'method': 'get'
}, function (res) {
    res.on("data", function (chunk) {
        // 持续不断的接受服务队返回的数据
        resData += chunk;
    });

    // 当接受完服务器的数据后触发的事件
    res.on('end', function () {
        console.log(resData)
    });
}).end();