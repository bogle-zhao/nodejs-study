const path = require('path');


const filePath = '/User/helloword/node/test.js';
/**
 * 解析路径信息
 * @type {ParsedPath}
 */
const obj = path.parse(filePath);

console.log(obj);
/*
输出内容：
{
  root: '/',
  dir: '/User/helloword/node',
  base: 'test.js',
  ext: '.js',
  name: 'test'
}

 */



