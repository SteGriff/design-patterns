import {ICookedMeat} from "Interfaces/ICookedMeat";
export class GrilledChicken implements ICookedMeat{
  //The compiler doesn't add the property to the 
  // object if it doesn't get set to a value
  // so calling GrilledChicken.Flavouring would
  // return undefined.
  public Weight : number = 0;
  public Flavouring : string = ""; 
  public Eat(): void{
    console.log("Ate the grilled chicken - yum.");
  }
}