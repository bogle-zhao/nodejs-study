const EventEmitter = require('events');

const emitter = new EventEmitter();

// 绑定自定义事件
emitter.on('myEvent', function myListener() {
    console.log('myListener');
});

emitter.on('myEvent', function myListener2(param1, param2) {
    console.log(`myListener2: ${param1}, ${param2}`)
});

// 可变参数形式
emitter.on('myEvent', function myListener3(...params) {
    const values = params.join(',');
    console.log(`myListener3: ${values}`);
});

// 获取事件名字myEvent 的所有监听器
console.log(emitter.listeners('myEvent'));

emitter.emit('myEvent', 'a', 'b', 'c', 'd', 'e', 'f');


