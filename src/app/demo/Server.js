const http = require('http');
const queryString = require('querystring');
const url = require('url');
const userService = require('./UserService');

const server = http.createServer(function (req, res) {
    let data = '';

    req.on('data', function (chunk) {
        data += chunk;
    });

    req.on('end', function () {
        const reqUrl = req.url;
        const method = req.method;
        console.log('url:' + reqUrl);
        if (reqUrl.includes('login') && method == 'GET') {
            const param = url.parse(reqUrl);
            console.log(param);

            const queryObj = queryString.parse(param.query);
            console.log(queryObj);

            let loginResult = userService.login(queryObj.username, queryObj.password);

            console.log('loginResult:' + loginResult);

            res.writeHead(200,{'Content-Type': 'text/plain'});
            res.end('username:' + queryObj.username + ', password:' + queryObj.password);
        }
    });
});

server.listen(3000, function () {
    console.log('server is listen 3000')
});




