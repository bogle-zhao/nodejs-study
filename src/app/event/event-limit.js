const http = require('http');
const events = require('events');

const httpServer = http.createServer();
// 最大的事件监听器数量(全局）
console.log('default max listener conunt:' + events.EventEmitter.defaultMaxListeners);

// 设置httpServer实例的监听器数量
httpServer.setMaxListeners(2);

const listener1 = (req, response) => {
    console.log('listener1');
}

const listener2 = (req, response) => {
    console.log('listener2');
}

const listener3 = (req, response) => {
    console.log('listener3');
}

httpServer.on('request', listener1);
httpServer.on('request', listener2);
//因为设置了最大监听器数量为2，所以这个添加不成功
httpServer.on('request', listener3);


httpServer.listen(3000, () => {
    console.log('listening to port 3000');
});
