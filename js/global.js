(function ($) {
    $(function () {

        //initialize all modals           
        $('.modal').modal();

        //now you can open modal from code
       // $('#modal1').modal('open');

        //or by click on trigger
        $('.trigger-modal').modal();

		$(".dropdown-button").dropdown();
    }); // end of document ready
})(jQuery); // end of jQuery name space
