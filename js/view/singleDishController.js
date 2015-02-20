var SingleDishController = function(view, model) {
 
 //alert('hej');


this.refreshDish = function(){

 view.goBackButton.click(function(){

 view.container.hide();
 $(searchMenuView).show();
 $(dishSelectView).show();

 
 });


 view.submitButton.click(function(){

 	var id = $(this).attr('id');

 	id = parseInt(id);

 	model.addDishToMenu(id);
 
 });


 }


 this.refreshDish();

}