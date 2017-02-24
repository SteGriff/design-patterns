C# keywords
===========

## `abstract`

"You must override this" - equivalent to VB `MustOverride`

 * Class - the class can't be instantiated (you can't make an instance of it), you can only make an instance of a subclass of it
 * Method - this method can't be called - it must be overridden in a subclass which can then be called. There can be an abstract method in a non-abstract class.
 * Property - same as method
 
## `virtual`

"You may override this" - equivalent to VB `Overridable`. Classes and class methods/properties cannot normally be overridden without using the `new` marker on the implementation (which is usually not a good idea). So to mark something as overridable, the `virtual` keyword is used.

## `sealed`

"This implementation cannot be overridden, ever" - like the `final` keyword in other languages like Java, and `NotInheritable` in VB.

 * Class - the class can't be overriden/inherited
 * Virtual Method - `sealed` can be used on a virtual method to prevent any implementations further down the chain
 * Virtual Property - same as method