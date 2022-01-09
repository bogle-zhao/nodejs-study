const str = 'abcde中';
const buffer = Buffer.from(str);

// 如果字符串包含中文，那么buffer字节长度一个中文3个byte
console.log(str.length);
console.log(buffer.length);

console.log(buffer)

// 真实的将buffer内容输出
console.log(buffer.toString('utf-8'));
