const http = require('http');
const queryString = require('querystring');
const url = require('url');
const userController = require('./user/controller/UserController');

const server = http.createServer((req, resp) => {
    let data = '';
    req.on('data', (chunk) => {
        data += chunk;
    });

    req.on('end', () => {
        const reqUrl = req.url;
        const method = req.method;
        console.log(reqUrl);

        if (reqUrl.includes('login') && method === 'GET') {
            const reqParam = url.parse(reqUrl);
            const queryObj = queryString.parse(reqParam.query);

            console.log(queryObj);

            userController.userLogin(queryObj.username, queryObj.password);

            resp.writeHead(200, {'Content-type': 'text/plain'});
            resp.end('userName:' + queryObj.username + ', password:' + queryObj.password);
        } else if (reqUrl.includes('logout') && method === 'GET') {
            const reqParam = url.parse(reqUrl);
            const queryObj = queryString.parse(reqParam.query);
            console.log(queryObj);
            userController.userLogout(queryObj.userSessionId);
            resp.writeHead(200, {'Content-Type': 'text/plain'});
            resp.end('user logout');
        } else if (!reqUrl.includes('favicon.ico')) {
            const reqParam = url.parse(reqUrl);
            const queryObj = queryString.parse(reqParam.query);
            console.log(queryObj);
            userController.userOtherOperation(queryObj.userSessionId);
            resp.writeHead(200, {'Content-Type': 'text/plain'});
            resp.end('user other');
        }
    });
});

server.listen(3000, () => {
    console.log('server is listening');
});


