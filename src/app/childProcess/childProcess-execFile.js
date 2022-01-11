const childProcess = require('child_process');
/*
比exec更高效，它不会直接创建新的shell环境执行，而exec需要创建一个新的shell环境执行命令
 */
childProcess.execFile('node', ['execFile'], (error, stdout, stderr) => {
    if (error) {
        console.log(error);
        throw error;
    }
    console.log(stdout.toString());
});




