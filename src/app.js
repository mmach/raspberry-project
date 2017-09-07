import { Servo } from './components/index.js'
import rpio from 'rpio';
import config from './config';
import Koa  from 'koa';
import cors from 'koa2-cors';
import KoaRouter from 'koa-router';
import koaBody  from 'koa-body';

const app = new Koa();
const router = new KoaRouter();
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



const raspServices = () => {
    const initFunc = (ctx) => {
        
        servoX.init(config.ServoCAM.X);
        servoY.init(config.ServoCAM.Y);
        ctx.status = 200;
        return ctx;
    };

   
    return {
        init: async (ctx) => {
            return await initFunc(ctx);
        },
      

    };
};



router.get('/init',  
    raspServices().init
  );
app.use(router.routes());

app.listen(3000);
  