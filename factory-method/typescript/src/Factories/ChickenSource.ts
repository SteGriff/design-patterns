import {IAnimal} from "Interfaces/IAnimal";
import {AnimalSource} from "Factories/AnimalSource"
import {Chicken} from "Animals/Chicken"
export class ChickenSource extends AnimalSource{
  public FactoryMethod() : IAnimal{
    let chicken : Chicken = new Chicken();
    chicken.Weight = 500;
    return chicken;
  }
}