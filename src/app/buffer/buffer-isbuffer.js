// 对象类型判断
const buffer = Buffer.from('hello');
const myObj = {};
const str = 'aa';
const flag = true;
const count = 4;

console.log(typeof buffer);
console.log(typeof myObj);
console.log(typeof str);
console.log(typeof flag);
console.log(typeof count);

/*
object
object
string
boolean
number

 */

// 因为buffer和myObj返回的都是object，无法区分是普通的object还是Buffer对象

console.log(Buffer.isBuffer(buffer));
console.log(Buffer.isBuffer(myObj));
/*
true
false
 */



