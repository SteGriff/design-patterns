using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FactoryMethod
{
    class CowSource : AnimalSource
    {
        public override IAnimal FactoryMethod()
        {
            return new Cow()
            {
                Attitude = 1000
            };
        }
    }
}
