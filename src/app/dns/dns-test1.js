const dns = require('dns');

const domain = 'www.sohu.com';

/**
 * 域名解析，将域名解析出ip
 */
dns.resolve(domain, function (error, address) {
    if (error) {
        console.error(error);
        return
    }
    // 解析出的ip
    console.log(address);
    /**
     * [ '109.244.80.129' ]
     */
});


