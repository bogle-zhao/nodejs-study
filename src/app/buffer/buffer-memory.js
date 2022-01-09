const buffer = Buffer.from('你好世界');

const jsonString = JSON.stringify(buffer);

console.log(jsonString);

// 将json对象转对象
const jsonObj = JSON.parse(jsonString);

console.log(jsonObj);

// 将对象转换为buffer
const buffer2 = Buffer.from(jsonObj);

console.log(buffer2.toString('utf-8'));

