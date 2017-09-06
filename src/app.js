import { Servo } from './components/index.js'
import rpio from 'rpio';
import config from './config';


rpio.init({
    gpiomem: false,
    mapping: 'physical',
});


rpio.pwmSetClockDivider(config.clockDiv);


let servoX = new Servo();
servoX.init(config.ServoCAM.X);
let servoY = new Servo();
servoY.init(config.ServoCAM.Y);

servoX.setAngle(128);
servoX.setAngle(100);
servoX.setAngle(0);
servoX.setAngle(128);
servoX.setAngle(60);
servoY.setAngle(55);
servoY.setAngle(110);
servoY.setAngle(55);
servoY.setAngle(110);
servoY.setAngle(55);
servoY.setAngle(110);
servoY.setAngle(55);
servoY.setAngle(110);
servoY.setAngle(55);
servoY.setAngle(110);
servoY.setAngle(55);
/*setTimeout(() => {
    servoX.close.bind(servoX)();
}, 10000)
*/
