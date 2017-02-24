namespace FactoryMethod
{
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
}
