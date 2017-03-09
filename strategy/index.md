# Strategy

## Why

Code always has centers of complexity (parts that change a lot). This is where the complex behaviours are, and they are difficult to maintain. When we are working with a sufficiently large object oriented code base, there are going to be times when we want to add a behaviour to one object in a family without affecting the others.




The strategy pattern is a way of separating centers of complexity (the parts of the code that change a lot) from the parts which mostly stay the same. We do this by using composition over inheritance 

## The problem
