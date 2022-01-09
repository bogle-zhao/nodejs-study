const dns = require('dns');

const domain = 'www.baidu.com';

/**
 * 将ip解析出域名
 */
dns.reverse(domain, function (error, domain) {
    console.log(domain);
});

