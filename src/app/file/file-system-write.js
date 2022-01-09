const fs = require('fs');

/*
异步写文件
path: 写的文件路径
data: 往文件写的内容
callback: 写入结果回调函数

默认情况下是文件覆盖，会将里面的内容完全覆盖
 */
fs.writeFile('mytest.txt', 'mytest, node.js', function (error) {
    if (error) {
        console.error(error);
        console.error('write file error');
    } else {
        console.log('write file successful');
    }
});

/*
文件追加方式

以下标志在 flag 选项接受字符串的任何地方可用。

'a': 打开文件进行追加。 如果文件不存在，则创建该文件。

'ax': 类似于 'a' 但如果路径存在则失败。

'a+': 打开文件进行读取和追加。 如果文件不存在，则创建该文件。

'ax+': 类似于 'a+' 但如果路径存在则失败。

'as': 以同步模式打开文件进行追加。 如果文件不存在，则创建该文件。

'as+': 以同步模式打开文件进行读取和追加。 如果文件不存在，则创建该文件。

'r': 打开文件进行读取。 如果文件不存在，则会发生异常。

'r+': 打开文件进行读写。 如果文件不存在，则会发生异常。

'rs+': 以同步模式打开文件进行读写。 指示操作系统绕过本地文件系统缓存。

这主要用于在 NFS 挂载上打开文件，因为它允许跳过可能过时的本地缓存。 它对 I/O 性能有非常实际的影响，因此除非需要，否则不建议使用此标志。

这不会将 fs.open() 或 fsPromises.open() 变成同步阻塞调用。 如果需要同步操作，应该使用类似 fs.openSync() 的东西。

'w': 打开文件进行写入。 创建（如果它不存在）或截断（如果它存在）该文件。

'wx': 类似于 'w' 但如果路径存在则失败。

'w+': 打开文件进行读写。 创建（如果它不存在）或截断（如果它存在）该文件。

'wx+': 类似于 'w+' 但如果路径存在则失败。
 */

fs.writeFile('mytest2.txt', 'mybatis node.js \r\n', {flag: 'a'}, function (error) {
    if (error) {
        console.error(error);
        console.error('write file error');
    } else {
        console.log('write file successful');
    }
});


