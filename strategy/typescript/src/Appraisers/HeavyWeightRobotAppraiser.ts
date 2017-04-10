import { BaseAppraiser } from "Appraisers/BaseAppraiser";
import { IPowerCalculation } from "interfaces/IPowerCalculation";
import { PolynomialPower } from "PowerStrategies/PolynomialPower";

export class HeavyWeightRobotAppraiser extends BaseAppraiser {
    protected powerStrategy : IPowerCalculation;
    constructor() {
        super();
        this.powerStrategy = new PolynomialPower(2,0,0);
    }
}