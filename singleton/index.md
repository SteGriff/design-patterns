# Singleton

## Why

There are some classes which should only ever have one instance, such as a utility class which is used throughout your program. The Singleton pattern allows you to guarantee there is only one instance of the class and that it's easily accessible.

## How

### Lazy Instantiation

We often use the term "singleton" to refer to the pattern below, but really this is just "lazy instantiation", and doesn't do the whole job:

	private PriceCache _cachedPrices;
	public PriceCache CachedPrices
	{
		get
		{
			if (_cachedPrices == null)
			{
				_cachedPrices = new CachedPrices();
			}
			return _cachedPrices;
		}
	}
	
The above guarantees that, **within the calling context**, you can always talk about the same instance of CachedPrices, it's easily accessible, and it's always set (not null) because it gets instantiated the first time you ask for it.

**But the shortcoming** of this approach is that other instances of PriceCache could be made anywhere else in your program, which you might not want.


### A Proper Singleton

A true singleton is written in such a way that you can only ever get one instance of it. It has an implementation like the one above *inside* the class, and has no public constructor:

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

### Things to notice

 * Both `_instance` and `Instance` are static even though the class itself is not. This is because we want to be able to call them like `PriceCache.Instance` without having to make our own instance of `PriceCache` first.
 * The constructor is written as `private PriceCache()` instead of `public PriceCache()`
 * Every other method and field is written as usual
 
### Using it

If we try to make a new instance of PriceCache, Visual Studio won't let us because the constructor is private; thi gives an "Inaccessible due to it's protection level" error:

	var pc = new PriceCache();

But we can ask the default instance and ask it to do something

	PriceCache.Instance.GetPrices();

We can also give this instance a different name. The variable `pc` would be a pointer to `PriceCache.Instance` so it calls the same code and the same instance as the above:

	var pc = PriceCache.Instance;
	pc.GetPrices();

