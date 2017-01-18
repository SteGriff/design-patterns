using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Singleton
{
    class Program
    {
        static void Main(string[] args)
        {
            //Inaccessible due to it's protection level (constructor is private):
            // var pc = new PriceCache();

            //Get the default instance and ask it to do something
            var pc = PriceCache.Instance;
            pc.GetPrices();

            //Likewise, without the local var
            PriceCache.Instance.GetPrices();

            //Both calls operate on the same instance

        }
    }
}
