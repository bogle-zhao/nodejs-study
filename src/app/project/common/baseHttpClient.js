const axios = require('axios');

const projectConfig = require('../util/projectConfigResolver');

const hostBaseUrl = projectConfig.hostBaseUrl;

exports.doHttpGetRequest = function (ctx, requestUrl, param) {
    return this.doHttpRequest(ctx, requestUrl, param, 'GET');
};

exports.doHttpPostRequest = function (ctx, requestUrl, param) {
    return this.doHttpRequest(ctx, requestUrl, param, 'POST');
};

exports.doHttpPutRequest = function (ctx, requestUrl, param) {
    return this.doHttpRequest(ctx, requestUrl, param, 'PUT');
};

exports.doHttpDeleteRequest = function (ctx, requestUrl, param) {
    return this.doHttpRequest(ctx, requestUrl, param, 'DELETE');
};


exports.doHttpRequest = function (ctx, requestUrl, params, method) {
    if ('GET' == method) {
        return axios({
            baseURL: hostBaseUrl,
            url: requestUrl,
            method: 'GET',
            params: params
        });
    } else if('PUT' === method || 'POST' === method || 'DELETE' === method){
        return axios({
            baseURL: hostBaseUrl,
            url: requestUrl,
            method: method,
            data: params
        });
    }
}


