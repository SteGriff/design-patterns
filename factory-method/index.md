# Factory Method

## First, a few words about interfaces

When I started enterprise grade programming, I wondered what Interfaces are there for. Why not just use abstract base classes? But actually, the way interfaces do what they do is useful and elegant:

 * They provide a contract for a load of objects to fulfil (so that a group of objects are all able to do the same set of stuff)
 * They don't provide any opinions about *how* that functionality should be accomplished internally
 
If we were writing a program about surviving a desert island, we might have many different sources of meat (sorry vegetarians) but we know that it all should be cooked. An absent-minded programmer might be tempted to write:

	public void CookAnimal(Animal theAnimal)
	{
		switch(theAnimal.GetType().ToString())
		{
			case "Chicken":
				var theChicken = (Chicken)theAnimal;
				theChicken.Grill();
			case "Pig":
				var thePig = (Pig)theAnimal;
				thePig.Fry();
			case "Cow":
				var theCow = (Cow)theAnimal;
				theCow.Stew();
		}
	}
	
...which is a mess. Especially when it occurs multiple times throughout the codebase; i.e., the decisions you make based on Animal type are proliferated around the code.

So an interface addresses this problem by creating a contract for Animals to fulfil:

	public interface IAnimal
	{
		ICookedMeat Cook();
	}

...which is then implemented by each Animal. Here is a `Chicken` class which implements Cook, but internally calls its Grill method. 

    public class Chicken : IAnimal
    {
        public decimal Weight { get; set; }

        public ICookedMeat Cook()
        {
            return Grill();
        }

        private GrilledChicken Grill()
        {
            var theMeat = new GrilledChicken();
            theMeat.Weight = Weight * 0.8M; //'M' is just used here to define a Decimal literal
            return theMeat;
        }
    }

The `Cook()` method returns an `ICookedMeat` object whose concrete implementation is actually `GrilledChicken`. But we've used an Interface again here because Meat (like an Animal) has a limited number of interactions which vary but whose outcome is the same. So all `ICookedMeat` could be `Eat()`-able, for example.

So once we have these improvements, the unsightly implementation of `CookAnimal()` becomes the much better:

	public ICookedMeat CookAnimal(IAnimal theAnimal)
	{
		return theAnimal.Cook();
	}


## Now the Factory Method

### Why

You might use the Factory Method pattern when:

 * A class needs to create different types of object (and it doesn't know which)
 * A class wants its subclasses to specify the objects it creates
 * Lots of different classes can be processed in the same way, and the processing shouldn't be repeated per-class
 
### In Real Life

You may have multiple connection strings configured using different database engines, and the desire to failover from one to the next if the connection can't be made. In this case you could have an `IConnection` with concrete implementations in `PostgresConnection` and `MsSqlConnection`, using a factory method to create each one as needed. The factory would not need to know which class is eventually supplied to the calling code.

### The pieces in play

#### "Product" (IAnimal)

 - Defines the interface of objects that the factory method creates
 - You could instead use an Abstract Class `Animal` to define the default created object with default behaviour
 
#### "ConcreteProduct" (Chicken, MysteryMeat)
 
 - Implements the Product interface

#### "Creator" (AnimalSource)

 - Declares the factory method, which returns a Product (IAnimal). May also define the default implementation of the factory method that returns a default ConcreteProduct object (if we were working with something more abstract than animals, like types of HTML element, this would make more sense.)
 - Might call the factory method, to create a Product (IAnimal) object
	
#### "ConcreteCreator" (ChickenSource)

 - Overrides the default factory method (in AnimalSource) to return a specifically typed instance of some IAnimal, such as a Chicken.


### How it works

![Chicken and Meat Factory - Class Diagram](class-diagram.png)

To get right down to the good part, let's look at the two factories. The first is a default implementation, and is marked as `abstract` so that you can't actually make one:

    public abstract class AnimalSource
    {
        //The factory method - no implementation here, just an abstract stub
        public abstract IAnimal FactoryMethod();

        //Produce an animal
        // This class can't do it
        // But an instance of an inheriting class CAN use this method
        public IAnimal GetAnimal()
        {
            //This method isn't abstract because inheriting members are ok to use it as-is;
            // only the implementation of FactoryMethod changes from class to class
            var animal = FactoryMethod();
            return animal;
        }

        public ICookedMeat GetFood()
        {
            //This method isn't abstract because inheriting members are ok to use it as-is;
            // only the implementation of FactoryMethod changes from class to class
            var animal = FactoryMethod();

            //Here's the win - we can do common processing in this method 
            // that is not repeated in all the other factory classes

            // Cook and flavour it
            var meat = animal.Cook();
            meat.Flavouring = "Salt and Pepper";

            return meat;
        }
    }

Important things to note are:

 * FactoryMethod has no implementation
 * GetAnimal has an implementation, and this will be the only one in the code base. No other factory class will (in this family of objects) will need to define a method like it.
 * GetFood is the same. We can do post-processing of our manufactured object to change it into a related ("parallel") object (like meat), in a repeatable way, and this processing code is never repeated anywhere else in the solution.
 
So let's look at a child class, the `ChickenSource`:

    public class ChickenSource : AnimalSource
    {
        public override IAnimal FactoryMethod()
        {
            //Visual studio will force you to override FactoryMethod like this
            // because it was marked abstract in the base class (AnimalSource)
            return new Chicken()
            {
                Weight = 500
            };
        }
    }
	
Very snappy - all it does it override the FactoryMethod. All of the other stuff will be available to call *via* the parent.

So here's the calling code:

	static void Main(string[] args)
	{
		//Not allowed to make an instance of AnimalSource because it's abstract:
		//var animalSource = new AnimalSource();

		//But we can make a tasty source of chicken:
		var animalSource = new ChickenSource();

		var animal = animalSource.GetAnimal();

		Console.WriteLine("Got a {0}", animal.GetType().ToString());
		
		//Let's cook it ourselves and get default grilled chicken with no flavour:
		var myMeat = animal.Cook();
		DescribeFood(myMeat);

		//Now let's ask the food factory for some ready-seasoned chicken:
		var food = animalSource.GetFood();
		DescribeFood(food);

		Console.ReadLine();
	}

	static void DescribeFood(ICookedMeat food)
	{
		Console.WriteLine("Got {0}g of {1} ({2})",
			food.Weight,
			food.GetType().ToString(),
			food.Flavouring);
	}


And the output from the program (N.b. the namespace of the project is `FactoryMethod`):

	Got a FactoryMethod.Chicken
	Got 400.0g of FactoryMethod.GrilledChicken ()
	Got 400.0g of FactoryMethod.GrilledChicken (Salt and Pepper)