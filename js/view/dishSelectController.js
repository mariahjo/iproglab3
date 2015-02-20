var DishSelectController = function(view, model ) {
 
this.refreshDishSelect = function(){

 view.clickImage.click(function(){

 	var id = $(this).attr('id');
 	model.addCurrentDish(id)


 	view.container.hide();
 	$(singleDishView).show();
 	$(searchMenuView).hide();
	
 });

}

this.refreshDishSelect()


}

