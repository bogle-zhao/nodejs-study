const childProcess = require('child_process');
/*
创建子进程
    command: ls(列出当前目录下的文件或目录)
    args: -al 获取所有的的目录或文件，包含隐藏的。 ./ 列出当前文件目录
 */
let lsChildProcess = childProcess.spawn('ls', ['-al', './']);

// 获取标准输出，绑定data事件
lsChildProcess.stdout.on('data', (data) => {
    console.log(data.toString());
    console.log(`child process id: ${lsChildProcess.pid}`);
});
/*
exit: 进程退出的事件

code: 退出来之后的结果码。
signal：表示这个子进程被什么信号中止的。
 */
lsChildProcess.on('exit', (code, signal) => {
    console.log(code);
});















