import { Servo } from './components/index.js'
import rpio from 'rpio';
import config from './config';

/*
rpio.init({
    gpiomem: false,          
    mapping: 'physical',
});*/

//rpio.pwmSetClockDivider(2);

let servoX = new Servo();
servoX.init(config.ServoCAM.X);

servoX.setDegree(500);

console.log(servoX);

setTimeout(()=>{
    servoX.close();
},1000)