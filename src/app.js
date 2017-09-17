import { Servo } from './components/index.js'
import rpio from 'rpio';
import config from './config';
import Koa from 'koa';
import cors from 'koa2-cors';
import KoaRouter from 'koa-router';
import koaBody from 'koa-body';
import wsocket from 'koa-websocket';

import RobotState from './state/RobotState.js'
import child_process from 'child_process';
const app = new Koa();
const socket = wsocket(app);
const http = new KoaRouter();
const ws = new KoaRouter();

const body = koaBody();
//app.use(cors());

rpio.init({
    gpiomem: false,
    mapping: 'physical',
});


rpio.pwmSetClockDivider(config.clockDiv);


let servoX = new Servo();
let servoY = new Servo();

//servoX.setAngle(128);
//servoY.setAngle(110);


console.log('odpalamy');
const raspServices = () => {
    const initFunc = (ctx) => {

        servoX.init(config.ServoCAM.X);
        servoY.init(config.ServoCAM.Y);
        ctx.status = 200;
        return ctx;
    };


    return {
        initAsync: async (ctx) => {
            return await initFunc(ctx);
        },
        init:  (ctx) => {
            return  initFunc(ctx);
        },


    };
};



http.get('/init',
    raspServices().initAsync
);

ws.get('/socket', async (ctx) => {

    let state = new RobotState();
    ctx.websocket.send(JSON.stringify(state));
    servoX.init(config.ServoCAM.X);
    servoY.init(config.ServoCAM.Y);
    child_process.exec('uv4l --syslog-host localhost --driver raspicam --width 320 --height 240',null,function(a,c,b){})
    ctx.websocket.on('message', function (message) {
        let state = JSON.parse(message);

        servoX.setAngle.bind(servoX)(state.servoX);
        servoY.setAngle.bind(servoY)(state.servoY);
        // do something with the message from client
        console.log(message);
    });
    ctx.websocket.on('close',function(close){
        child_process.exec('pkill uv4l',null,function(a,c,b){})
        servoX.close.bind(servoX)();
        servoY.close.bind(servoY)();
        console.log('close');
})


});
app.ws.use(ws.routes())
app.use(http.routes());

app.listen(3000);
