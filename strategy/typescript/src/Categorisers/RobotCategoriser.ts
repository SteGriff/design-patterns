import { IRobotAppraiser } from "Interfaces/IRobotAppraiser";
import { Robot } from "Models/Robot";
import { CelebrityRobotAppraiser } from "Appraisers/CelebrityRobotAppraiser";
import { HeavyWeightRobotAppraiser } from "Appraisers/HeavyWeightRobotAppraiser";
import { MidWeightRobotAppraiser } from "Appraisers/MidWeightRobotAppraiser";
import { FlyWeightRobotAppraiser } from "Appraisers/FlyweightRobotAppraiser";

export class RobotCategoriser
{
  private static Celebrities : Array<String>  = ["Optimus Prime", "Voltron"];
  private static HeavyWeightLowerBound : number = 5000;
  private static MidWeightLowerBound : number = 3000;

  public static categorise(robot: Robot) : IRobotAppraiser
  {
    if (this.Celebrities.indexOf(robot.name) >= 0)
    {
      return new CelebrityRobotAppraiser();
    }
    else if(robot.weight > this.HeavyWeightLowerBound)
    {
      return new HeavyWeightRobotAppraiser();
    }
    else if(robot.weight > this.MidWeightLowerBound)
    {
      return new MidWeightRobotAppraiser();
    }
    else
    {
      //Fall back to flyweight if no other category fits
      return new FlyWeightRobotAppraiser();
    }
  }
}