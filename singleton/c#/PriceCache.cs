using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Singleton
{
    public class PriceCache
    {
        private static PriceCache _instance;
        public static PriceCache Instance
        {
            get
            {
                if (_instance == null)
                {
                    _instance = new PriceCache();
                }
                return _instance;
            }
        }

        private PriceCache()
        {
            //Private constructor
            _prices = new Dictionary<string, decimal>();
        }

        private Dictionary<string, decimal> _prices;

        public void GetPrices()
        {
            _prices.Add("ABC123", 15.40m);
        }

    }
}
