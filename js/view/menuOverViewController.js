var MenuOverViewController = function(view, model ) {
 


 this.refreshOverview = function(){


 view.backButton.click(function(){
 view.container.hide();
 $(dishSelectView).show();
 $(searchMenuView).show();
 $(exampleView).show();
 });

 view.printButton.click(function(){
 view.container.hide();
 $(printPageView).show();
 });


 }


 this.refreshOverview();
 
}

