# Strategy

Making behaviours into objects so that they can be reused by composition. It also lets you change the behaviour of an object at runtime if necessary. Helps with maintenance compared to building using inheritance alone.

## Why

Code always has centers of complexity (parts that change a lot). These bits are difficult to maintain when object behaviours need to change. When we are working with a sufficiently large object oriented code base, there are going to be times when we want to add a behaviour to one object in a family without affecting the others. Building using composition as well as inheritance makes this easier.

### An example

Jim works for Village Software, who maintain the internal management software for Yovotel, a hotel chain.

A hotel makes rooms available. Rooms can be for sleeping (`BedRoom`) or meetings (`ConferenceRoom`). All Rooms can be Booked, creating a booking, and Cleaned, scheduling housekeeping to attend to it, and the implementation is the same across all types. However, while all rooms can be Billed for, the implementation for `Bill` is different for each type of room.

	Room
		Book() - create a booking
		Clean() - send housekeeping
		abstract Bill() - charge for the room, no basic implementation
		
	BedRoom
		Bill() - based on nights, room size, and minibar usage
		
	ConferenceRoom
		Bill() - based on days, catering, and facilities used




The strategy pattern is a way of separating centers of complexity (the parts of the code that change a lot) from the parts which mostly stay the same. We do this by using composition over inheritance 

## The problem
