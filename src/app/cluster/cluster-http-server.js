const cluster = require('cluster');
const http = require('http');
const os = require('os');
//获取cpu核心数
const cpuCount = os.cpus().length;
console.log(cpuCount);

// 设置策略，一般不需要设置
// cluster.schedulingPolicy = cluster.SCHED_NONE

//测试当前进程是否为父进程
if (cluster.isMaster) {
    for (let i = 0; i < cpuCount; ++i) {
        /*
        当前fork没有传参数，那么这个fork出来的子进程到底执行什么命令呢？
        答案：
            每个fork出来的进程会执行当前文件。
         */
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(worker.process.pid);
    });
} else {
    //如果是子进程在执行这个程序
    /*
    表象是有多个线程都启动了一个服务器，都监听了同一个端口，
    答案：
    使用cluster模式后，主进程发生了变化，
        1. 监听端口是使用主进程Master来监听的
        2. 主进程只负责接受请求，在接受到请求后，将请求派发给子进程处理，参考netty
        3. 主进程和子进程之间通过socket建立连接，每个子进程有一个随机的端口号，master进程监听对外的端口号。
        4. 子进程处理完成后，通过socket通信将结果返回给主进程。

        node：master work模式

        调度策略（schedulingPolicy)：主进程选取子进程进行调度的方式。
        node提供了两种：
            1. cluster.SCHED_RR(默认）有冻结功能，短时间服务同一个请求时，使用同一个进程处理
            2. cluster.SCHED_NONE: 由操作系统调度处理

     */
    const httpServer = http.createServer((req, res) => {
        let data = '';
        req.on('data', (chunk) => {
            data += chunk;
        });

        req.on('end', () => {
            res.writeHead(200, {'Content-Type': 'text/plain'});

            res.end(`${process.pid}`);
        });
    });

    httpServer.listen(3000, () => {
        console.log('listening to port 3000');
    });
}


