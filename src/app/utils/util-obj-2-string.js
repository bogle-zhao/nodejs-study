const util = require('util');

const obj = {
    name: 'zhangsan',
    address:'hangzhou'
}

// 将对象转换为字符串，调试很有用
const str = util.inspect(obj);

console.log(str)
/*
输出内容：
{ name: 'zhangsan', address: 'hangzhou' }

 */

// 带颜色的输出
const str2 = util.inspect(obj, {
    'colors':true
});

console.log(str2)

const obj2 = {
    name: 'zhangsan',
    address:'hangzhou',
    age: 23,
    married: false,
    getAge: function () {
        return this.age;
    },
}


const str3 = util.inspect(obj2, {
    'colors':true
});

console.log(str3)
/*
输出如下：
{
  name: 'zhangsan',
  address: 'hangzhou',
  age: 23,
  married: false,
  getAge: [Function: getAge]
}
 */


