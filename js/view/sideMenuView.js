//ExampleView Object constructor
var SideMenuView = function (container,model) {

	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	var totalCost = container.find("#totalCost");
	var dishName = container.find("#dishName");
	var dishPrice = container.find("#dishPrice");



	model.addDishToMenu(1);
	model.addDishToMenu(201);
	model.addDishToMenu(100);


	this.numberOfGuests.html(model.getNumberOfGuests);

	totalCost.html(model.getTotalMenuPrice());

	this.getNames = function(){
		var print = '';
		var chosenDishes = model.getFullMenu();
		if('starter' in chosenDishes){
			var starterid = chosenDishes.starter;
			var starter = model.getDish(starterid);
			print+= starter.name+'<br />';
		}

		if('main' in chosenDishes){
			var mainid = chosenDishes.main;
			var main = model.getDish(mainid);
			print+= main.name+'<br />';
		}

		if('dessert' in chosenDishes){
			var dessertid = chosenDishes.dessert;
			var dessert = model.getDish(dessertid);
			print+= dessert.name+'<br />';
		}

		return print;


	}

	dishName.html(this.getNames());

	this.getPrice = function(){
		var print = '';
		var chosenDishes = model.getFullMenu();
		if('starter' in chosenDishes){
			var starterid = chosenDishes.starter;
			var starterPrice = model.getDishPrice(starterid)
			print+= starterPrice+'<br />';
		}

		if('main' in chosenDishes){
			var mainid = chosenDishes.main;
			var mainPrice = model.getDishPrice(mainid)
			print+= mainPrice+'<br />';
		}

		if('dessert' in chosenDishes){
			var dessertid = chosenDishes.dessert;
			var dessertPrice = model.getDishPrice(dessertid)
			print+= dessertPrice+'<br />';
		}

		return print;


	}

	dishPrice.html(this.getPrice());

}