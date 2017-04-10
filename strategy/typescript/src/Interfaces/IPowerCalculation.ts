import { Robot } from "Models/Robot";

export interface IPowerCalculation {
    calculatePower(robot: Robot):number
}