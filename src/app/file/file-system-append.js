
const fs = require('fs');

fs.appendFile('info.txt', 'hello world ', 'utf-8', (error) => {
    if (error) {
        throw error;
    }
    console.log('success');
});



