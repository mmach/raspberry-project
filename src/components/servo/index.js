import rpio from 'rpio';
import config from './../../config.js'
export default class Servo {

    consturctor() { }
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
        var speed =0; 
        
        if (this.angle > angle) {
            direction = -1;
            speed=config.Latency/(this.angle-angle)
        }
        else if (this.angle < angle) {
            direction = 1;
            speed=config.Latency/(angle-this.angle)
        } else {
            return;
        }
        this.angle=angle;
        var that = this;
        //var pulse = setInterval(function () {
        var pulse = setInterval(()=>{
            if(pulse==that.angle){
                console.log(that.PIN+"- closed");
                clearInterval(pulse);
            }
            rpio.pwmSetData(this.PIN, data);
            data += direction;
           
        },speed)  
     
    }
    close() {
        console.log(this);
        console.log("SERVO on PIN-" + this.PIN + " is turn off");
        rpio.close(this.PIN)
    }

} 