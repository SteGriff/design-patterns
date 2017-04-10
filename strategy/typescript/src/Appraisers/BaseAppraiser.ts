import { IRobotAppraiser } from "Interfaces/IRobotAppraiser";
import { IPowerCalculation } from "interfaces/IPowerCalculation";
import { Robot } from "Models/Robot";

export abstract class BaseAppraiser implements IRobotAppraiser {
    protected abstract powerStrategy : IPowerCalculation;

    constructor() {}
    
    public appraise = function (robot: Robot) : void {
        let powerLevel : number = this.powerStrategy.calculatePower(robot);
        console.log(robot.name + ", your power level is: " + powerLevel);
    }
}