const http = require('http');
const httpServer = http.createServer();
httpServer.on('request', (request, response) => {
    if (request.url === '/') {
        console.log('on');
        response.end('end on');
    }
});

/**
 * 1。 可以添加多个监听器
 * 2。addListener和on是一样的，on是addListener的别名写法
 */
httpServer.addListener('request', (request, response) => {
    if (request.url === '/') {
        console.log('addListener');
        // 只能有一个response发送数据，否则会报错
        // response.end('end addListener');
    }
});

// 添加一次监听器，监听器执行完成后，监听器被删除
httpServer.once('request', () => {

});
// 移除事件
// httpServer.removeListener('需要移除的事件名称', '需要移除的监听器引用')
// httpServer.off('request', '需要移除的事件的引用'); // 该方法等同removeListener，是它的别名形式
// 需要移除的针对该事件名称的所有监听器
// httpServer.removeAllListeners('需要移除的事件名称');




httpServer.listen(3000, () => {
    console.log('listening to port 3000');
});





