using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FactoryMethod
{
    public class StewedBeef : ICookedMeat
    {

        public decimal Weight { get; set; }

        public string Flavouring { get; set; }

        public void Eat()
        {
            Console.WriteLine("Hmm... chewy...");
        }
    }
}
