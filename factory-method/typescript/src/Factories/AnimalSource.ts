import { IAnimal } from "Interfaces/IAnimal"
import { ICookedMeat } from "Interfaces/ICookedMeat";
export abstract class AnimalSource{
  //The factory method - no implementation here, just an abstract stub
  public abstract FactoryMethod() : IAnimal;

  //Produce an animal
  // This class can't do it
  // But an instance of an inheriting class CAN use this method
  public GetAnimal():IAnimal{
    //This method isn't abstract because inheriting members are ok to use it as-is;
    // only the implementation of FactoryMethod changes from class to class
    return this.FactoryMethod();
  }

  public GetFood():ICookedMeat{
    //This method isn't abstract because inheriting members are ok to use it as-is;
    // only the implementation of FactoryMethod changes from class to class
    let animal : IAnimal = this.FactoryMethod();

    //Here's the win - we can do common processing in this method 
    // that is not repeated in all the other factory classes

    // Cook and flavour it
    let meat : ICookedMeat = animal.Cook();
    meat.Flavouring = "Salt and Pepper";

    return meat;
  }
}