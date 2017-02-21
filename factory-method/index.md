# Factory Method

## First, a few words about interfaces

When I started enterprise grade programming, I wondered what Interfaces are there for. Why not just use abstract base classes? But actually, the way interfaces do what they do is useful and elegant:

 * They provide a contract for a load of objects to fulfil (so that a group of objects are all able to do the same set of stuff)
 * They don't provide any opinions about *how* that functionality should be accomplished internally
 
If we were writing a program about surviving a desert island, we might have many different sources of meat (sorry vegetarians) but we know that it all should be cooked. A new programmer might be tempted to write:

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
	
Which is a mess. Especially when it occurs multiple times throughout the codebase; i.e., the decisions you make based on Animal type are proliferated around the code.

