import rpio from 'rpio';
import config from './../../config.js'
export default class Servo {

    constructor() { }
    init(configServo) {
        console.log("SERVO on PIN-" + configServo.PIN + " is turn on");
        this.PIN = configServo.PIN;
        this.minDegree = configServo.Min;
        this.maxDegree = configServo.Max;
        this.Range = configServo.Range;
        this.Interval = configServo.Interval
        this.angle = this.minDegree;

        rpio.close(this.PIN);
        rpio.open(this.PIN, rpio.PWM);

        rpio.pwmSetRange(this.PIN, this.Range);
        rpio.pwmSetData(this.PIN, this.angle);
    }

    setAngle(angle) {
        var direction = 0;
        var data = this.angle;
        var speed = 0;
        if (angle > 0 && angle + this.angle < this.maxDegree) {
            direction = -1;
           // speed = config.Latency / (angle)
        }
        else if (0 < angle && this.angle + angle > this.minDegree) {
            direction = 1;
            //speed = config.Latency / (angle * (-1))
        } else {
            return;
        }
        this.angle = this.angle + angle;
        console.log(this.PIN+"-"+this.angle);
        var that = this;
        //var pulse = setInterval(function () {
        //   var pulse = setInterval(()=>{
        //     if(data==that.angle){
        //         console.log(that.PIN+"- closed");
        //          clearInterval(pulse);
        //      }
        rpio.pwmSetData(this.PIN, this.angle);
        //      data += direction;

        //  },speed)  

    }
    close() {
        console.log("SERVO on PIN-" + this.PIN + " is turn off");
        rpio.close(this.PIN)
    }

} 