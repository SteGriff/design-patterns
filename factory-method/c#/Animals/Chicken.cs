namespace FactoryMethod
{
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
}
