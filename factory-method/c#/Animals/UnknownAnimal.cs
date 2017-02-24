using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FactoryMethod
{
    public class UnknownAnimal : IAnimal
    {
        public ICookedMeat Cook()
        {
            var meat = new MysteryMeat();
            meat.Weight = 10;
            return meat;
        }
    }
}
