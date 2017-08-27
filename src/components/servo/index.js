import rpio from 'rpio';

export default class Servo {

    consturctor() { }
    init(config) {
        console.log("SERVO on PIN-" + config.PIN + " is turn on");
        this.PIN = config.PIN;
        this.minDegree = config.minDegree;
        this.maxDegree = config.maxDegree;

        rpio.open(this.PIN , rpio.PWM);
      
        rpio.pwmSetRange(this.PIN, this.maxDegree);
    }

    setDegree(degree) {
        rpio.pwmSetData(this.PIN, degree)
    }
    close(degree) {

        console.log("SERVO on PIN-" + this.PIN + " is turn off");
        rpio.close(this.PIN)
    }

} 