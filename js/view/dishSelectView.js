var DishSelectView = function (container,model) {

	

	var allDishes = container.find("#allDishes");



	var hehe = '';
	var haha = model.getAllDishes('main');

	this.getDishes = function()
	{ 
		hehe += '<div class="row">'
		for(i=0;i<haha.length;i++)
		{
			var dish = haha[i];
			hehe += "<div class='col-md-3'><br /><h4>"
			hehe += "<center><img src=js/images/"+dish.image+' width=100%><br /><br/>';
			hehe += dish.name;
			hehe += "</h4></center>"
			hehe += "<p>"+dish.description.substr(0, 80)+'...</p></div>'

		}
		hehe += '</div>'
	return hehe
	};
	allDishes.html(this.getDishes());

}