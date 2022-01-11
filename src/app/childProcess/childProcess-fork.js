const childProcess = require('child_process');

/*
派生的子进程只能执行node的命令
silent: 将进程输出的消息分开
 */
let forkProcess = childProcess.fork('./fork', {silent:true});

forkProcess.on('message', (message) => {
    console.log('main -> ' + process.pid + ':' + message);
});
/*
向它启动的子进程的进程发送消息
 */
forkProcess.send('hello world');














