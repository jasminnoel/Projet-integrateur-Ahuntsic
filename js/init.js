(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space


// Date de naissance - Input
$(document).ready(function(){
	$('.datepicker').datepicker();
});

// Entrée select
$(document).ready(function(){
	$('select').formSelect();
});