const fs = require('fs');

/*
如果目录已经存在，不可重复创建，会报错
 */
fs.mkdir('mydir', (err) => {
    if (err) {
        throw err;
    }
    console.log('success')
});

/**
 * 创建多级的目录
 * recursive: 表示递归创建，默认不会递归创建
 */
fs.mkdir('mydir1/hello', {recursive: true}, (err) => {
    if (err) {
        throw err;
    }
    console.log('success')
});


