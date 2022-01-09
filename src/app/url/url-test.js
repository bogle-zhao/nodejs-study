const url = require('url');

const urlString = "http://www.test.com?order=23";
const urlObject = url.parse(urlString);

// url 工具，输出url协议等信息
console.log(urlObject);
/*
输出内容
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.test.com',
  port: null,
  hostname: 'www.test.com',
  hash: null,
  search: '?order=23',
  query: 'order=23',
  pathname: '/',
  path: '/?order=23',
  href: 'http://www.test.com/?order=23'
}

 */