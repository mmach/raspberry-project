import rpio from 'rpio';

export default class Servo {

    consturctor() { }
    init(config) {
        console.log("SERVO on PIN-" + config.PIN + " is turn on");
        this.PIN = config.PIN;
        this.minDegree = config.Min;
        this.maxDegree = config.Max;
        this.Range = config.Range;
        this.Interval = config.Interval
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
            speed=1000/(this.angle-angle)
        }
        else if (this.angle < angle) {
            direction = 1;
            speed=1000/(angle-this.angle)
        } else {
            return;
        }
        this.angle=angle;
   
        //var pulse = setInterval(function () {
        do
         {   

                //clearInterval(pulse);
            rpio.pwmSetData(this.PIN, data);
            data += direction;
            rpio.msleep(speed);
        }while(this.angle != data)
    }
    close() {
        console.log(this);
        console.log("SERVO on PIN-" + this.PIN + " is turn off");
        rpio.close(this.PIN)
    }

} 