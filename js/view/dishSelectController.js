var DishSelectController = function(view, model ) {
 
 view.clickImage.click(function(){

 	var id = $(this).attr('id');
 	model.addCurrentDish(id)


 	view.container.hide();
 	$(singleDishView).show();
	
 });



}

