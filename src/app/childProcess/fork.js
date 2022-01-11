[1, 2, 3, 4, 5].forEach(i => {
    console.log(i);
});

process.on('message', (message) => {
    console.log('fork -> ' + process.pid + ':' + message);
    // 向主进程发送消息
    process.send('welcome');
});