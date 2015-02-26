var PrintPageViewController = function(view, model ) {
 //Controller för utskriftssidan

 this.refreshPrint = function(){
 //Knapp för att gå tillbaka	
 view.backButton.click(function(){
 view.container.hide();
 $(menuOverView).show();
 });

 }

 this.refreshPrint();

}

