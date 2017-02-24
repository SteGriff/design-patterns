namespace FactoryMethod
{
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
}
