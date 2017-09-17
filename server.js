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
class RobotState{
    constructor(){
        this.servoX=conf;
        this.servoY=0;
    }

}
http.get('/',     async (ctx) => {
    console.log('test');
    return await initFunc(ctx);
});

ws.get('/socket', async (ctx) => {
    ctx.websocket.send('Hello World');
    ctx.websocket.on('message', function(message) {
      // do something with the message from client
          console.log(message);
    });
    ctx.websocket.on('close',function(close){
            console.log('close');
    })
 
});
app.use(http.routes());
app.ws.use(ws.routes());

app.listen(3000);