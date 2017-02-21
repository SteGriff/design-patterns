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
		public ICookedMeat Cook();
	}

...which is then implemented by each Animal. Here is a `Chicken` class which implements Cook, but internally calls its Grill method. 

	public class Chicken : IAnimal
	{
		private int Weight {get;set;}
		
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

The `Cook()` method returns an ICookedMeat object whose concrete implementation is actually `GrilledChicken`. But we've repeated the idea of an Interface here because Meat (like an Animal) has a limited number of interactions which vary but whose outcome is the same. So all `ICookedMeat` could be `Eat()`-able, for example, even though they may require different... cutlery.

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


### The participants 

"Product" (IAnimal)

 - Defines the interface of objects that the factory method creates

 
"ConcreteProduct" (Chicken)
 
 - Implements the Product interface
	

"Creator" (AnimalSource)

 - Declares the factory method, which returns a Product (IAnimal). May also define the default implementation of the gfactory method that returns a default ConcreteProduct object (if we were working with something more abstract than animals, like types of HTML element, this would make more sense.)
	
 - Might call the factory method, to create a Product (IAnimal) object
	
"ConcreteCreator" (ChickenSource)

 - Overrides the default factory method (in LivestockOrigin) to return a specifically typed instance of some IAnimal, such as a Chicken.
	
	

