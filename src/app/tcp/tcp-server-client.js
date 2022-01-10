const net = require('net');

const client = new net.Socket();
client.connect({port: 8888, host: 'localhost'}, () => {
    console.log('connected to the server')
});
