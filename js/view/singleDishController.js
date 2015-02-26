var SingleDishController = function(view, model) {
//Controller för enskilda receptssidan  


this.refreshDish = function(){

//Knapp för att gå tillbaka
 view.goBackButton.click(function(){

 view.container.hide();
 $(searchMenuView).show();
 $(dishSelectView).show();

 
 });

//Knapp för att lägga till på menyn
 view.submitButton.click(function(){

 	var id = $(this).attr('id');

 	id = parseInt(id);

 	model.addDishToMenu(id);
 
 });


 }


 this.refreshDish();

}