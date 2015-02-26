var MainController = function(model) {
 

//Skapar alla views samt tillhörande controllers
var exampleView = new ExampleView($("#exampleView"),model);
window.exampleViewController = new ExampleViewController(exampleView,model);


var dishSelectView = new DishSelectView($("#dishSelectView"),model);
window.dishSelectController = new DishSelectController(dishSelectView,model);


var singleDishView = new SingleDishView($("#singleDishView"),model);
window.singleDishController = new SingleDishController(singleDishView,model);

var menuOverView = new MenuOverView($("#menuOverView"),model);
window.menuOverViewController = new MenuOverViewController(menuOverView,model);

var printPageView = new PrintPageView($("#printPageView"),model);
window.printPageViewController = new PrintPageViewController (printPageView, model);

var searchMenuView = new SearchMenuView($("#searchMenuView"),model);
window.searchMenuController = new SearchMenuController (searchMenuView, model);

var startView = new StartView($("#startView"),model);
var startController = new StartController (startView, model);

}

