
import config from './../config.js'

export default  class RobotState{
    constructor() { 
        this.servoX=config.ServoCAM.X.Min;
        this.servoY=config.ServoCAM.Y.Max;
    }

}