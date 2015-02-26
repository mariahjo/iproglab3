var ExampleViewController = function(view, model ) {
 
 //Kod för knapp som lägger till +1 på antal gäster
 view.plusButton.click(function(){
 model.setNumberOfGuests(model.getNumberOfGuests() + 1);
 });

 //Kod för knapp som lägger till -1 på antal gäster
 view.minusButton.click(function(){
 model.setNumberOfGuests(model.getNumberOfGuests() - 1);
 });


//Kod för knapp som godkänner menyn
 view.confirmButton.click(function(){
 view.container.hide();
 $(searchMenuView).hide();
 $(dishSelectView).hide();
 $(singleDishView).hide();
 $(menuOverView).show();
 });


this.refresh = function(){

//Kod för kryss-knapp som tar bort vald starter från menyn	
view.removeStarter.click(function(){
 var dish=model.getSelectedDish('starter');
 var id=dish.id;
 model.removeDishFromMenu(id);
console.log("removeStarter in ExampleViewController");
 });

//Kod för kryss-knapp som tar bort vald main från menyn	
 view.removeMain.click(function(){
 var dish=model.getSelectedDish('main');
 var id=dish.id;
 model.removeDishFromMenu(id);
console.log("removeMain in ExampleViewController");
 });

 //Kod för kryss-knapp som tar bort vald dessert från menyn	
 view.removeDessert.click(function(){
 var dish=model.getSelectedDish('dessert');
 var id=dish.id;
 model.removeDishFromMenu(id);
console.log("removeDessert in ExampleViewController");
});

 }


 this.refresh();


}

