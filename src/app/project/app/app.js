// 入口文件

const Koa = require('koa');
const path = require('path');
const combineRouters = require('koa-combine-routers');
const bodyparser = require('koa-bodyparser');
const koaStatic = require('koa-static');
const compress = require('koa-compress');

const app = new Koa();
const userRouter = require('../router/userRouter');
/**
 * threshold：超过2048bit 进行压缩
 */
app.use(compress({
    threshold: 2048
}))

app.use(bodyparser());

app.use(koaStatic(path.join(__dirname, '../dist')));

const unifiedRouters = combineRouters(userRouter)();

app.use(unifiedRouters);

module.exports = app;


