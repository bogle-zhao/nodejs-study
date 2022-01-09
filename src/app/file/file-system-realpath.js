

const fs = require('fs');

/*
将文件相对路径转换为绝对路径
 */
fs.realpath('file-system-realpath.js', (err, resolvedPath) => {
    if (err) {
        console.error(err);
        throw err;
    }
    console.log(resolvedPath);
});
