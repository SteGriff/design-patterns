using System;

namespace FactoryMethod
{
    public class GrilledChicken : ICookedMeat
    {
        public int Weight { get; set; }

        public void Eat()
        {
            Console.WriteLine("Ate the grilled chicken - yum.");
        }
    }
}
