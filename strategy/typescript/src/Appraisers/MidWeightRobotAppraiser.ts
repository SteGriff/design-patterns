import { BaseAppraiser } from "Appraisers/BaseAppraiser";
import { IPowerCalculation } from "interfaces/IPowerCalculation";
import { PolynomialPower } from "PowerStrategies/PolynomialPower";

export class MidWeightRobotAppraiser extends BaseAppraiser {
    protected powerStrategy : IPowerCalculation;
    constructor() {
        super();
        this.powerStrategy = new PolynomialPower(0,1.5,0);
    }
}