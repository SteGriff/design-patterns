import { IPowerCalculation } from "interfaces/IPowerCalculation";
import { Robot } from "Models/Robot";

//Implements y = ae^(bx)
export class ExponentialPower implements IPowerCalculation {
    constructor(private a: number,private b: number) { }
    public calculatePower(robot: Robot): number{
        return this.a * Math.exp(robot.weight * this.b);
    }
}