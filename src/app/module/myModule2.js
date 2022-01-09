
const myModule2 = {
    myInfo:{
        name:'zhangsan',
        age: 30
    },

    myFunction: function (inputNumber) {
        return inputNumber + 1;
    }
}
// 导出方式1：模块导出，但是这种方式在使用时比较麻烦
/*
const myModule2 = require('./myModule2');
// 模块.对象.{函数，方法}
console.log(myModule2.myModule2.myInfo);
console.log(myModule2.myModule2.myFunction(3));

 */
// exports.myModule2 = myModule2;

// 导出方式2：直接将整个对象导出，这种导出方式在使用方比较方便
/*
使用方式：
const myModule2 = require('./myModule2');
// 模块.[对象，函数]
console.log(myModule2.myInfo);
console.log(myModule2.myFunction(3));

 */
module.exports = myModule2;