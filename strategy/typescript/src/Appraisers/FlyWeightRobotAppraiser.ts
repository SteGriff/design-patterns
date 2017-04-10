import { BaseAppraiser } from "Appraisers/BaseAppraiser";
import { IPowerCalculation } from "interfaces/IPowerCalculation";
import { PolynomialPower } from "PowerStrategies/PolynomialPower";

export class FlyWeightRobotAppraiser extends BaseAppraiser {
    protected powerStrategy : IPowerCalculation;
    constructor() {
        super();
        this.powerStrategy = new PolynomialPower(0,0,50);
    }
}