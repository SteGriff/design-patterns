using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FactoryMethod
{
    public class Cow : IAnimal
    {
        public decimal Attitude { get; set; }

        public ICookedMeat Cook()
        {
            return new StewedBeef()
            {
                Weight = Attitude * 2
            };
        }
    }
}
