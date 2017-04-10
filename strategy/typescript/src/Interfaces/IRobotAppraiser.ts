import { Robot } from "Models/Robot";

export interface IRobotAppraiser {
    appraise(robot:Robot): void
}