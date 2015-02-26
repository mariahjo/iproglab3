var SearchMenuController = function(view, model ) {
	//Controller för sökmenyn
 
 this.searchWord ='';

 this.refreshSearch = function(){

 //Kod för valet av sorts maträtt
 view.dropdown.click(function(){
 	var id = $(this).attr('id');	
 	model.changeShowDishes(id);
 });

//Kod för sökningsbaren
 view.searchButton.click(function(){

	searchWord = $('#searchString').val();
	model.changeSearchWord(searchWord);


 });

 }

 this.refreshSearch();

}

