const http = require('http');

const httpServer = http.createServer();

httpServer.listen(3000, () => {
    console.log('listening to port 3000');
});


// 添加自定义事件监听器
httpServer.on('serverEvent', (par1, par2, par3) => {
    console.log(par1 +',' + par2 + ',' + par3);
});

// 自定义事件，发射名称：serverEvent，args:字符串参数
httpServer.emit('serverEvent', 'hello', 'world', 'welcome');
