const fs = require('fs');

/**
 * 检测文件当前目录下./file-system-exists.js是否存在，
 */
fs.access('./file-system-exists.js', err => {
    if (err) {
        throw err;
    }
    console.log('success');
});




