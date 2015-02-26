var StartController = function(view, model ) {
 //Controller för startsidan

//Knapp för att gå vidare
 view.button.click(function(){
 view.container.hide();
 $(dishSelectView).show();
 $(searchMenuView).show();
 $(exampleView).show();
 });
 
}

