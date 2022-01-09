const path = require('path');

//文件扩展名

const outputPath = path.join(__dirname, 'myDir', 'hello.js');
// 获取文件的扩展名
const extInfo = path.extname(outputPath);
//输出.js
console.log(extInfo)


