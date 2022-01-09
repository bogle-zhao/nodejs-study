const url = require('url');

const urlObject ={
    'host': 'www.test.com',
    'port':9999,
    'protocol': 'http',
    'search': '?order=1234',
    'query': 'order=1234',
    'path': '/'
}

// 将对象转换为url信息
let realAddress = url.format(urlObject);
console.log(realAddress);
/**
 * 输出内容：
 * http://www.test.com?order=1234
 */