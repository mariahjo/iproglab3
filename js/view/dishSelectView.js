var DishSelectView = function (container,model) {

	this.container=container;
	model.addObserver(this);
	
	var main = container.find('#dishhead');
	var allDishes = container.find("#allDishes");
	container.hide();

	this.selectFunction = function(){


	var hehe = '';
	var selectedType = model.showDishes;
	alert(selectedType);
	var filter= model.searchWord;
	console.log(filter);
	var haha = model.getAllDishes(selectedType,filter);

	this.getDishes = function()
	{ 
		hehe += '<div class="row">'
		for(i=0;i<haha.length;i++)
		{
			var dish = haha[i];
			hehe += "<div class='col-md-2'><br /><h4>"
			hehe += "<center><img class='food' id='" + dish.id +"' src=js/images/"+dish.image+' width=100%><br /><br/>';
			hehe += dish.name;
			hehe += "</h4></center>"
			hehe += "<p>"+dish.description.substr(0, 80)+'...</p></div>'

		}
		hehe += '</div>'
	return hehe
	};
	allDishes.html(this.getDishes());

	}

	this.selectFunction();


	this.clickImage = container.find('.food');


	this.update = function(){

		this.selectFunction();

		this.clickImage = container.find('.food');

		dishSelectController.refreshDishSelect()



	}

}