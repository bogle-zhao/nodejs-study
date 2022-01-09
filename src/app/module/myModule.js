
var myInfo = {
    name:'zhangsan',
    age: 20
};

var myFunction = function (inputNumber) {
    return inputNumber + 5;
};
// 表示将当前文件的myInfo对象导出，导出的名字叫: myInfo1
exports.myInfo1 = myInfo;
// 将当前文件的myFunction函数导出，导出的函数名字：myFunction1
exports.myFunction1 = myFunction;


