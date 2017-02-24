using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FactoryMethod
{
    public class Chicken : IAnimal
    {
        private int Weight { get; set; }

        public ICookedMeat Cook()
        {
            return Grill();
        }

        private GrilledChicken Grill()
        {
            var theMeat = new GrilledChicken();
            theMeat.Weight = Weight;
            return theMeat;
        }
    }
}
