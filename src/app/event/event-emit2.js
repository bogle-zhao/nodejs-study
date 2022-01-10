const EventEmitter = require('events');

const emitter = new EventEmitter();

// newListener： 只有一个事件监听器被注册，该事件就会触发
emitter.once('newListener', (event, listener) => {
    if (event === 'myEvent') {
        emitter.on('myEvent', () => {
            console.log('hello');
        });
    }
});

emitter.on('myEvent', () => {
    console.log('world');
});


emitter.emit('myEvent');




