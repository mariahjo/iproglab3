var SingleDishView = function (container,model) {

	this.container=container;
	model.addObserver(this);


	var leftField = container.find("#left");
	container.hide();


	this.foodPage = function(id){

	var thisDish = model.currentDish;

	var food = model.getDish(thisDish);


	var print ='';
	print += '<br /><h2>'+food.name+'</h2><br /><br />';
	print += "<img src=js/images/"+food.image+' width="100%"><br/><br />';
	print += '<p>'+food.description+'</p>';
	print+='<br/><div class="col-md-7"><span id="back"><input class="btn btn-default" type="back" value="Back to Select Dish"></span></div><br /><br />'
	leftField.html(print);



	var rightField = container.find("#right");
	var print2 = '';
	var numbGuest = model.getNumberOfGuests();
	print2 += '<h3>Ingredients for '+numbGuest+' person(s).</h3>';
	print2 += '<div id="iAmount" class="col-md-3">'
	this.getAmount = function(){
		var ingredients = food.ingredients
		for(i=0;i<ingredients.length;i++){
			var ingredient=ingredients[i];
			print2+=Math.ceil((ingredient.quantity*numbGuest*10)/10)+' '+ingredient.unit+'<br/>';
		}

	};
	this.getAmount();

	
	print2+='</div>';

	print2 += '<div id="iName" class="col-md-6">'

	this.getName = function(){
		var ingredients = food.ingredients
		for(i=0;i<ingredients.length;i++){
			var ingredient=ingredients[i];
			print2+=ingredient.name+'<br/>';
		}

	};


	this.getName();

	print2+='</div>';

	print2 += '<div id="iPrice" class="col-md-3">'


	this.getPrice = function(){
		var totPrice=0;
		var ingredients = food.ingredients
		for(i=0;i<ingredients.length;i++){
			var ingredient=ingredients[i];
			totPrice += ingredient.price*numbGuest;
			print2+='SEK'+' '+ingredient.price*numbGuest+'<br/>';
		}
	print2+='<hr size="5px">'
	print2+='</div>'


	print2+='<div id="ingredientBottom">';
	print2+='<div class="col-md-9"><span class="submit" id="' + food.id + '""><input class="btn btn-default" type="submit" value="Confirm Dish"></div>';

	print2+='<div class="col-md-3">SEK	'+totPrice+'<br /></div>';
	print2+='</div>';

	};

	this.getPrice();


	rightField.html(print2);

	}

	this.foodPage();


	this.goBackButton = container.find('#back');
	this.submitButton = container.find('.submit');

	this.update = function(){
		this.foodPage();

		console.log('Update method SingleDishView');
		// console.log(this.getNames());

		this.goBackButton = container.find('#back');
		this.submitButton = container.find('.submit');

		singleDishController.refreshDish();

	}

 }
 
