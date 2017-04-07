import { BaseAppraiser } from "Appraisers/BaseAppraiser";
import { IPowerCalculation } from "interfaces/IPowerCalculation";
import { ExponentialPower } from "PowerStrategies/ExponentialPower";

export class CelebrityRobotAppraiser extends BaseAppraiser {
    protected powerStrategy : IPowerCalculation;
    constructor() {
        super();
        this.powerStrategy = new ExponentialPower(10,0.01);
    }
}