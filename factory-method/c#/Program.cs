using System;

namespace FactoryMethod
{
    class Program
    {
        static void Main(string[] args)
        {
            //Not allowed to make an instance of AnimalSource because it's abstract:
            //var animalSource = new AnimalSource();

            //But we can make a tasty source of chicken:
            var animalSource = new ChickenSource();

            var animal = animalSource.GetAnimal();

            Console.WriteLine("Got a {0}", animal.GetType().ToString());
            
            //Let's cook it ourselves and get default grilled chicken with no flavour:
            var myMeat = animal.Cook();
            DescribeFood(myMeat);
            myMeat.Eat();

            //Now let's ask the food factory for some ready-seasoned chicken:
            var food = animalSource.GetFood();
            DescribeFood(food);
            food.Eat();

            var cowSource = new CowSource();
            var beef = cowSource.GetFood();
            DescribeFood(beef);
            beef.Eat();

            Console.ReadLine();
        }

        static void DescribeFood(ICookedMeat food)
        {
            Console.WriteLine("Got {0}g of {1} ({2})",
                food.Weight,
                food.GetType().ToString(),
                food.Flavouring);
        }

    }
}
