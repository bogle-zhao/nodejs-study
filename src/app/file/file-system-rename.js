const fs = require('fs');
/*
文件重命名
 */
fs.rename('mytest2.txt', 'world.txt', (error) => {
    if (error) {
        throw error;
    }
});

// 查看文件信息
/*
这里执行有可能报错，因为重命名和查看文件状态都是异步执行的，那个函数先执行完目前不可控，正确写法在重命名回调函数里面去读取
 */
fs.stat('world.txt', (error, status) => {
    if (error) {
        throw error;
    }
    console.log(JSON.stringify(status));
});


/**
 * 正确写法
 */
fs.rename('mytest2.txt', 'world.txt', (error) => {
    if (error) {
        throw error;
    }

    fs.stat('world.txt', (err, status) => {
        if (error) {
            throw error;
        }
        console.log(JSON.stringify(status));
    });
});





