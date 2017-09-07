const Koa = require('koa');
const router = require('koa-router');


const app = new Koa();
const socket = require('koa-websocket')(app);
// Loading router package



const http = router();
const ws = router();
var initFunc=function(ctx){

    return ctx;
}
http.get('/',     async (ctx) => {
    console.log('test');
    return await initFunc(ctx);
});

ws.get('/socketunction', async (ctx) => {
    console.log('test');
    ctx.websocket.send('Hello World');
    ctx.websocket.on('message', function(message) {
      // do something with the message from client
          console.log(message);
    });
 
});
app.use(http.routes())
app.ws.use(ws.routes())
app.listen(3000);