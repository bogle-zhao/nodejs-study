
/*
node操作文件系统是通过一个重要的原生模块来实现：fs

文档：https://nodejs.org/api/fs.html

对于fs中的大多数api来说，node都提供了相同功能的两个版本：同步版本和异步版本
对于同步版本和异步版本来说，其在方法的命名上都存在一个规则：
xxx(异步)
xxxSync(同步)

 */

const fs = require('fs');
// 1. 读取文件,异步方式读取文件
fs.readFile('test.txt', 'utf-8', function (error, data) {
    // error： 读取失败后的错误信息
    // data： 真正读取到的数据
    if (error) {
        console.error(error)
        console.error('error occured');
    } else {
        console.log('readFile:' + data);
    }
});


// 2. 读取文件：同步方式读取文件
try {
    const data = fs.readFileSync('test.txt', 'utf-8');
    console.log('readFileSync:' + data);
} catch (e) {
    console.log(e);
}







