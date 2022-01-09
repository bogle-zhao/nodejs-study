const buffer1 = Buffer.from('hello');
const buffer2 = Buffer.from('world');
const buffer3 = Buffer.from('welcome');
const buffer4 = Buffer.from('中国');


const bufferArray = [buffer1, buffer2, buffer3, buffer4];

const bufferResult = Buffer.concat(bufferArray, buffer1.length + buffer2.length + buffer3.length + buffer4.length);

// 一个中文3个byte
console.log(bufferResult.length);
console.log(bufferResult.toString('utf-8'));