var SearchMenuController = function(view, model ) {
 
 this.searchWord ='';

 this.refreshSearch = function(){
 view.dropdown.click(function(){

 	console.log('hehe');

 	var id = $(this).attr('id');	
 	model.changeShowDishes(id);


 });


 view.searchButton.click(function(){

	searchWord = $('#searchString').val();
	model.changeSearchWord(searchWord);


 });

 }

 this.refreshSearch();

}

