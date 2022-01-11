const Koa = require('koa');

const app = new Koa();

/*
ctx: context,koa将请求的request，response都封装到了ctx中，
 */
app.use(async (ctx) => {
    // 方式1：返回给客户端的文本
    // ctx.body = 'Hello Koa';

    // 方式2：获取请求的response进行显示处理，这个response不是node原生的response，是koa的response对象，它是对node的response进行了封装
    // ctx.response.body 等同于上面的 ctx.body
    ctx.response.type = 'text/html';
    ctx.response.body = '<h2>Hello Koa</h2>'

    // ctx.req 这个是node原生的request
    // ctx.resp 这个是node原生的response

});

app.listen(3000);

