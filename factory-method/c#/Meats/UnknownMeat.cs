using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FactoryMethod
{
    public class UnknownMeat : ICookedMeat
    {
        public int Weight { get; set; }

        public void Eat()
        {
            Console.WriteLine("Hmm... suspicious flavour... like cat food or siu mai...");
        }
    }
}
