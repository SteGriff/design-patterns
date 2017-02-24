using System;

namespace FactoryMethod
{
    public class GrilledChicken : ICookedMeat
    {
        public decimal Weight { get; set; }
        public string Flavouring { get; set; }

        public void Eat()
        {
            Console.WriteLine("Ate the grilled chicken - yum.");
        }

    }
}
