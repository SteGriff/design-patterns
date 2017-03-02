import {IAnimal} from "Interfaces/IAnimal";
import {ICookedMeat} from "Interfaces/ICookedMeat";
import {MysteryMeat} from "Meats/MysteryMeat";

export class UnknownAnimal implements IAnimal{
  public Cook(): ICookedMeat{
    let meat : MysteryMeat = new MysteryMeat();
    meat.Weight = 10;
    return meat;
  }
}