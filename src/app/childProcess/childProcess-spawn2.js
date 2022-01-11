const childProcess = require('child_process');

const nodeChildProcess = childProcess.spawn('node', ['childProcess-spawn']);

nodeChildProcess.stdout.on('data', (data) => {
    console.log(data.toString());
    console.log(`child process id2 ${nodeChildProcess.pid}`);
});

nodeChildProcess.on('exit', (code, signal) => {
    console.log(code);
});














