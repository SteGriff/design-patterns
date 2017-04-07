# FoodApp

----

## User Stories

A large basic pizza is £16.00
Additional toppings are £0.25/£0.50/£0.75 on s/m/l

A garlic pizza is £8.00

Chicken dippers are £5.00

The Winter Warmer deal is £20 for a large basic pizza, a garlic pizza, and chicken dippers

----

## Domain description

A restaurant has one offering. This is a registry of all the things they sell, not linked to a price. Each thing they sell is known as a Dish, including starters, mains, extra, desserts, and even drinks.
A restaurant has many menus (lunch, dinner, special events, per country, an airport menu, a drive thru menu)
Each menu has a list of lines, just like a paper menu. On each line there is one or more dishes (it could be a dish or a deal) and a price.
The price has various complexities to do with Tax/VAT and currency

An order 

----

## Object breakdown

Restaurant
	Has:
		Id RestaurantId
		string Name
		...
		Offering
		List<Menu> Menus
		
Offering
	Has:
		List<Dish> Dishes
		
Menu
	Has:
		List<MenuLine> MenuLines

MenuLine
	Has:
		Id MenuItemId
		string Title
		List<Buyable> Items
		Price
	
Dish
	Can be:
		StarterDish : Dish
		MainDish : Dish
		DessertDish : Dish
		Drink : Dish
	Has:
		Id DishId
		string Name
		string Description
		List<Ingredient> Ingredients (used for allergy and nutritional info)
		TasteInformation (spice level etc.)
	
Price
	Has:
		decimal Amount
		decimal DiscountPercentage
		Currency
		TaxRate
		
TaxRate
	Has:
		string Band
		decimal Percentage
		
Order
	Has:
		Customer
		Channel
		List<MenuLine> OrderLines
		DateTime OrderPlaced
		DateTime OrderFulfilled
		DateTime DeliveryStarted
		DateTime Delivered
		DateTime Paid (may happen upon order or upon delivery)
		
Channel (enum)
	- Web
	- Phone
	- Counter
	- Fax
	
Customer
	...
		
