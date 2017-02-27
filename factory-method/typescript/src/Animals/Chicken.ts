import {IAnimal} from "../Interfaces/IAnimal";
import {ICookedMeat} from "../Interfaces/ICookedMeat";
import {GrilledChicken} from "../Meats/GrilledChicken";
export class Chicken implements IAnimal{
  public Weight:number;
  public Cook() : ICookedMeat{
    return this.Grill();
  }
  private Grill() : GrilledChicken{
    let theMeat : GrilledChicken = new GrilledChicken();
    theMeat.Weight = this.Weight * 0.8;
    return theMeat;
  }
}