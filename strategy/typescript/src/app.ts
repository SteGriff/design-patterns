import { Robot } from "Models/Robot";
import { RobotCategoriser } from "Categorisers/RobotCategoriser";

let Main = function () {

  let robots :Array<Robot> = [
    new Robot("Optimus Prime", 2000.25),
    new Robot("Voltron", 1300.5),
    new Robot("Carbide", 5123),
    new Robot("Apollo", 5431),
    new Robot("Small", 1236),
    new Robot("Mid", 3004)
  ];

  robots.forEach(r => {
    RobotCategoriser.categorise(r).appraise(r);
  });
}

Main();