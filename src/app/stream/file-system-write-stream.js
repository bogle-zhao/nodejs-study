const fs = require('fs');

const readStream = fs.createReadStream('file-system-write-stream.js', {encoding:'utf-8'});
const writeStream = fs.createWriteStream('mytest.js', {encoding:'utf-8'});
/*
将读取的内容写到writeStream中
 */
readStream.on('data', (data) => {
    writeStream.write(data, () => {
        console.log(data);
    });
});





