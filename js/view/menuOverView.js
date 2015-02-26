var MenuOverView = function (container,model) {
	// View för översiktssidan

	this.container=container;
	container.hide();


	var sub = container.find("#sub");
	var food= container.find("#foodOverview");
	

	//Funktion som hämtar ut information om vår meny från model
	this.getDishes = function(){
	var print = '';
	print += '<br /><h2>My Dinner: '+model.getNumberOfGuests()+' people</h2><span id=back-button><input class="btn btn-lg" type="submit" value="Go back and edit dinner"></span>'
	sub.html(print);

	this.backButton= container.find("#back-button");


	var print2 ='';
	var chosenDishes = model.getFullMenu();
	var menu=[];
	if('starter' in chosenDishes){
		menu.push(model.getSelectedDish('starter'));
	}

	if('main' in chosenDishes){
		menu.push(model.getSelectedDish('main'));
	}

	if('dessert' in chosenDishes){
		menu.push(model.getSelectedDish('dessert'));
	}


	print2 += '<div class="col-md-3"></div>';


		//Skriver HTML-kod och information för alla enskilda rätter på menyn
		for(i=0;i<menu.length;i++){
			var dish = menu[i];

			print2 += "<div class='col-md-2'><br /><h3>"
			print2 += "<center><img src=js/images/"+dish.image+' width=100%><br /><br/>';
			print2 += dish.name;
			print2 += "</h3></center>"
			print2 += "<p>"+dish.description.substr(0, 80)+'...</p></div>'
		}
		print2 += '</div><div class="row"><div class="col-md-12"><center><br /><br /><h2>Total price: '
		print2 += model.getTotalMenuPrice() + ' SEK<br />';
		print2 += '<br /><span id=print-button><input class="btn btn-lg" type="submit" value="Print Full Recipes"></span></center></div></div>';

		food.html(print2);
	}

	this.getDishes()

	this.printButton = container.find("#print-button");
	model.addObserver(this)

	//Funktion som körs vid update
	this.update = function (obj){
		this.getDishes()

		this.printButton = container.find("#print-button");	
		this.backButton= container.find("#back-button");

		menuOverViewController.refreshOverview();

	

	}

 }
 
