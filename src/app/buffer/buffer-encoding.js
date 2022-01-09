const str = 'utf8';
const str2 = 'utf-8';
const str3 = 'UTF-8';
const str4 = 'UTF-9';
const str5 = 'gbk2312';
const str6 = 'gbk';
// Buffer.isEncoding: 参数是否是encoding
console.log(Buffer.isEncoding(str));
console.log(Buffer.isEncoding(str2));
console.log(Buffer.isEncoding(str3));
console.log(Buffer.isEncoding(str4));
console.log(Buffer.isEncoding(str5));// false node不支持gbk2312
console.log(Buffer.isEncoding(str6)); // false node 不支持gbk

