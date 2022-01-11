const process = require('process');

// nodejs 的版本
const version = process.version
// 除了nodejs的版本，还包含其他依赖项的版本，比如ssl版本，chrom v8版本等。
const versions = process.versions;

console.log(`version:${version}`)
console.log(versions)

// 当前所运行的平台版本
console.log(process.platform)

// 当前nodejs命令执行命令的文件的路径
console.log(process.execPath)

// 配置信息
console.log(process.config)

//当前node执行的进程id
console.log(process.pid)

console.log(process.title);
// 操作系统架构
console.log(process.arch);
// nodejs执行的内存情况
console.log(process.memoryUsage.toString())
// 当前应用工作的目录
console.log(process.cwd())
// 回到工作目录的上一层目录
console.log(process.chdir('../'))
// 环境信息
console.log(process.env)
// 当前进程的执行时间
console.log(process.uptime());
// 进程退出事件
process.on('exit', function () {
    console.log('node process existed');
});

//退出
// process.exit(0);
// 退出之前的事件
process.on('beforeExit', function () {
    console.log('node process before existed')
});

// 未捕获的异常，通常作为最后的事件处理
process.on('uncaughtException', (error) => {
    console.log(error);
    console.log('==========');
    console.log('uncaughtException ocured');
});
// 系统信号
process.on('SIGINT', () => {
    console.log('received SIGINT info ');
});






