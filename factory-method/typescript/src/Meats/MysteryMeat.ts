import {ICookedMeat} from "Interfaces/ICookedMeat";
export class MysteryMeat implements ICookedMeat{
  public Weight: number;
  public Flavouring: string;
  public Eat():void{
    console.log("Hmm... suspicious flavour... like cat food or siu mai...");
  }
}