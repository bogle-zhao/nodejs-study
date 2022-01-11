const path = require('path');
const jsonfile = require('jsonfile');

// 将解析的文件导出
module.exports = jsonfile.readFileSync(path.join(__dirname, '../projectConfig.json'));





