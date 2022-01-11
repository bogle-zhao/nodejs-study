const childProcess = require('child_process');
/*
command: 待执行的命令
    执行node exec文件
options：执行参数
callback：回调
 */
childProcess.exec('node exec', (error, stdout, stderr) => {
    if (error) {
        console.error(error);
        throw error;
    }
    console.log(stdout.toString());
});











