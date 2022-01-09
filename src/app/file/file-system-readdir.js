const fs = require('fs');

fs.readdir('./', (err, files) => {
    if (err) {
        // 在实际开发中，不能使用这种方式直接往上抛异常
        throw err;
    }
    console.log(files);
});


