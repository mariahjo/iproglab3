var MenuOverViewController = function(view, model ) {
//Controller för menyöversikten 


 this.refreshOverview = function(){

 //Knapp för att gå tillbaka till menyval
 view.backButton.click(function(){
 view.container.hide();
 $(dishSelectView).show();
 $(searchMenuView).show();
 $(exampleView).show();
 });

//Knapp för att gå vidare till sidan för utskrift
 view.printButton.click(function(){
 view.container.hide();
 $(printPageView).show();
 });


 }


 this.refreshOverview();
 
}

