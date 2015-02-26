var DishSelectController = function(view, model ) {

//Controller som används när vi ska välja en maträtt som vi vill se receptet på
 

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

