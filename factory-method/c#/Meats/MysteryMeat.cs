using System;

namespace FactoryMethod
{
    public class MysteryMeat : ICookedMeat
    {
        public decimal Weight { get; set; }
        public string Flavouring { get; set; }

        public void Eat()
        {
            Console.WriteLine("Hmm... suspicious flavour... like cat food or siu mai...");
        }
    }
}
