const fs = require('fs');


const readStream = fs.createReadStream('./file-system-read-stream.js', {encoding: 'utf-8'});

// 打开
readStream.on('open', (fd) => {
    console.log(fd);
});

// 就绪
readStream.on('ready', () => {
    console.log('ready');
});

// 读取文件数据事件
// stream读取完毕后，自动关闭，触发close事件
readStream.on('data', (data) => {
    console.log('--------------')
    console.log(data)
    console.log('--------------')
});

// 文件读取完毕事件
readStream.on('end', () => {
    console.log('end');
});
//关闭事件
readStream.on('close', () => {
    console.log('close');
});

//stream 错误事件
readStream.on('error', (err) => {
    console.log(err);
});
