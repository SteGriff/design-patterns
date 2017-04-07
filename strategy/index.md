# Strategy

Making behaviours into objects so that they can be reused by composition. It also lets you change the behaviour of an object at runtime if necessary. Helps with maintenance compared to building using inheritance alone.


## Why

Code always has centers of complexity (parts that change a lot). These bits are difficult to maintain when object behaviours need to change. When we are working with a sufficiently large object oriented code base, there are going to be times when we want to add a behaviour to one object in a family without affecting the others. Building using composition as well as inheritance makes this easier.


## An Example

Jim works for Village Software, who maintain the internal management software for Yovotel, a hotel chain. At the moment, HotelManager (TM) is just used for facilities management - managing the housekeeping team as they keep the hotel clean and tidy.

The hotel makes rooms available. Rooms can be for sleeping (`GuestRoom`) or meetings (`ConferenceRoom`), amongst others. All types of Room can be Cleaned, scheduling housekeeping to attend to it, and the implementation is the same across all types. However, while each Room has a `PrintWorkTicket()` method, the implementation is different for each sub class (because the list of cleaning tasks for housekeeping to do is different in each type of room).

	Room
		Clean() - send housekeeping
		abstract PrintWorkTicket() - no basic implementation
		
	GuestRoom
		PrintWorkTicket() - clean the bathroom
		
	ConferenceRoom
		PrintWorkTicket() - vacuum the floor

Now, HotelManager (TM) is being expanded to handle **room booking** as well. So Jim decides that he's going to use the power of Object Oriented Programming and add `Book()` to the base `Room` class in order to give it to all subtypes - score!

	Room
		+ Book() - create a booking for the room
		
The day after rollout, there is confusion all over the hotel. Guests are lingering in shared bathrooms, restaurants, and even the lobby, thinking this is their room. Since the software was just managing cleaning before, it was touching *every* kind of room in the hotel.

	GuestRoom
	ConferenceRoom
	LobbyRoom
	CorridorRoom
	BathRoom
	
...and now they all have mysterious booking records. 

 * Jim failed to notice that not *all* types of Room should be Booked.
 * He made a localized update to the code which had widespread consequences.
 * His attempt at code re-use turned into a maintenance problem.
 
### Option 1 - lazy override

Jim could override `Book()` in LobbyRoom, CorridorRoom, and BathRoom, so that the implementation does nothing, but:

 1. This is ugly
 2. This is high maintenance; any time VS add a new Room class, they have to remember to override the `Book()` implementation
 
### Option 2 - interfaces everywhere

Jim could move the behaviours to interfaces like `IBookable`. Each room would implement IBookable... but the downside is that now he has to write *n* implementations, as many as there are subclasses of Room. And he has to write a new one each time they add a new type of room which is IBookable. This will result in duplicate code (oh no)!

There must be a better way...


## Be **Strategic**

To apply the strategy pattern, we are going to move the complex, changeable behaviours into their own classes (which don't change).

	IPrintWorkTicketBehaviour
	| - PrintWorkTicket()
	|
	|__PrintCleanBathroomWorkTicketBehaviour
	|   - PrintWorkTicket()
	|
	|__PrintVacuumFloorWorkTicketBehaviour
		- PrintWorkTicket()

		
	IBookBehaviour
	| - Book()
	|
	|__ BookOvernightBehaviour
	|    - Book()            
	|
	|__ BookDaytimeBehaviour
	|	 - Book()
	|
	|__ BookNotPossibleBehaviour
		 - Book()

The strategy pattern is a way of separating centers of complexity (the parts of the code that change a lot) from the parts which mostly stay the same. We do this by using **composition** over **inheritance**.

So each Room now gets two properties:

	Room
		IPrintWorkTicketBehaviour PrintWorkTicketBehaviour
		IBookBehaviour BookBehaviour
		--
		Clean()
		
	GuestRoom
		PrintCleanBathroomWorkTicketBehaviour PrintWorkTicketBehaviour
		BookOvernightBehaviour BookBehaviour
		
	ConferenceRoom
		PrintVacuumFloorWorkTicketBehaviour PrintWorkTicketBehaviour
		BookDaytimeBehaviour BookBehaviour

	CorridorRoom
		PrintVacuumFloorWorkTicketBehaviour PrintWorkTicketBehaviour
		BookNotPossibleBehaviour BookBehaviour

	...
	
The neat thing about our new behaviour classes is that they're not tightly coupled to a room type. For example, `PrintVacuumFloorWorkTicketBehaviour` works for conference rooms and corridors. `BookNotPossibleBehaviour` works for all of our unbookable rooms. So we only need one class per *behaviour*, rather than per *consumer class*.

Furthermore, if in future we add things that are bookable which aren't Rooms, we can simply add a behaviour to them and if it's written correctly, it could *just work*:

	SpaVisit
		BookDaytimeBehaviour
	
	AdventureTrip
		BookDaytimeBehaviour
		

