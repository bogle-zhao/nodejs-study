const Koa = require('koa');

const app = new Koa();

/*
next: 下一个函数的回调，这个next是按照运行事情的顺序装配的
执行顺序
    myFunction1 started
    myFunction2 started
    myFunction3 started
    fun
    myFunction3 finished
    myFunction2 finished
    myFunction1 finished

 */
app.use(async (ctx, next) => {
    console.log('myFunction1 started');
    await next();
    console.log('myFunction1 finished');
});

app.use(async (ctx, next) => {
    console.log('myFunction2 started');
    await next();
    console.log('myFunction3 finished');
});

app.use(async (ctx, next) => {
    console.log('myFunction3 started');
    await next();
    console.log('myFunction3 finished');
});

/*
ctx: context,koa将请求的request，response都封装到了ctx中，
 */
app.use(async (ctx) => {
    // 方式1：返回给客户端的文本
    // ctx.body = 'Hello Koa';
    console.log('fun');
    // 方式2：获取请求的response进行显示处理，这个response不是node原生的response，是koa的response对象，它是对node的response进行了封装
    // ctx.response.body 等同于上面的 ctx.body
    ctx.response.type = 'text/html';
    ctx.response.body = '<h2>Hello Koa</h2>'

    // ctx.req 这个是node原生的request
    // ctx.resp 这个是node原生的response

    /*
    洋葱模型：类似netty的pipline，请求到达是，到达最外层的组件，一层一层的深入，到达最底层后，又从里面的组件向外传输处理

     */



});

app.listen(3000);

