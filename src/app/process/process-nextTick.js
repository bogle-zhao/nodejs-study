
// nextTick: 在一个同步方法执行完成之后，或者是下一个异步方法执行之前，让所指定的异步方法去执行。

const fs = require('fs');
const myFunction = () => {
    console.log('myFunction invoked');
};

process.nextTick(myFunction);

console.log(fs.readFileSync('./process-nextTick.js').toString('utf-8'));

fs.readFile('./process-nextTick.js', (error, data) => {
    console.log(data.toString('utf-8'));
});




