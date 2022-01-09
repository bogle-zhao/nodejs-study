const url = require('url');

const urlAddress = url.resolve('http://www.test.com', 'order');

/**
 * 解析url
 */
console.log(urlAddress);
/*
输出内容如下：
http://www.test.com/order
 */