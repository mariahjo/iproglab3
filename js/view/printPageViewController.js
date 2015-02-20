var PrintPageViewController = function(view, model ) {
 

 this.refreshPrint = function(){
 view.backButton.click(function(){
 view.container.hide();
 $(menuOverView).show();
 });

 }

 this.refreshPrint();

}

