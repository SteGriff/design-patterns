import { IPowerCalculation } from "interfaces/IPowerCalculation";
import { Robot } from "Models/Robot";

//Implements y = ax^2 + bx + c
export class PolynomialPower implements IPowerCalculation {
    constructor(private a: number,private b: number,private c: number) { }
    public calculatePower(robot: Robot): number{
        return this.a * (robot.weight ^ 2) + this.b * robot.weight + this.c;
    }
}