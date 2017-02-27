import {ICookedMeat} from "./Interfaces/ICookedMeat";
import {IAnimal} from "./Interfaces/IAnimal";
import {AnimalSource} from "./Factories/AnimalSource";
import {ChickenSource} from "./Factories/ChickenSource";
import {TypeOf} from "./Utilities/TypeOf"

let DescribeFood = function(food: ICookedMeat): void{
  let described = `Got ${food.Weight}g of ${TypeOf(food)} (${food.Flavouring})`;
  console.log(described);
}
let Main = function(){
  let animalSource : AnimalSource = new ChickenSource();
  let animal : IAnimal = animalSource.GetAnimal();
  console.log(`Got a ${TypeOf(animal)}`);
  let meat = animal.Cook();
  DescribeFood(meat);
  let food = animalSource.GetFood();
  DescribeFood(food);
}

Main();