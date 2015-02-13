$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	model.addDishToMenu(200);
	model.addDishToMenu(3);
	model.addDishToMenu(101);

	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"),model);
	var dishSelectView = new DishSelectView($("#dishSelectView"),model);
	var singleDishView = new SingleDishView($("#singleDishView"),model);
	var menuOverView = new MenuOverView($("#menuOverView"),model);
	var printPageView = new PrintPageView($("#printPageView"),model);
	var searchMenuView = new SearchMenuView($("#searchMenuView"),model);
	var startView = new StartView($("#startView"),model);

});