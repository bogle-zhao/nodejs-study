const buffer = Buffer.alloc(128);

// 返回真正的长度，中文，一个字符3个字节
const length = buffer.write('hello world你好', 'utf-8');

console.log('byte count:' + length);




