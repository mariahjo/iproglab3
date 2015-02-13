$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"),model);
	var examleViewController = new ExampleViewController (ExampleView, model);
	var dishSelectView = new DishSelectView($("#dishSelectView"),model);
	var singleDishView = new SingleDishView($("#singleDishView"),model);
	var menuOverView = new MenuOverView($("#menuOverView"),model);
	var printPageView = new PrintPageView($("#printPageView"),model);
	var startView = new StartView($("#startView"),model);


});