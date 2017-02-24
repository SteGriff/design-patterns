namespace FactoryMethod
{
    public interface ICookedMeat
    {
        decimal Weight { get; set; }
        string Flavouring { get; set; }

        void Eat();
    }
}
