const fs = require('fs');

fs.unlink('mytest.txt', (error) => {
    if (error) {
        throw error;
    }
    console.log('success');
})






