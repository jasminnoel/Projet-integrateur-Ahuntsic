(function ($) {
    $(function () {

        //initialize all modals           
        $('.modal').modal();

        //now you can open modal from code
       // $('#modal1').modal('open');

        //or by click on trigger
        $('.trigger-modal').modal();
		
	$('select').formSelect();

		$(".dropdown-button").dropdown({
			belowOrigin:true,
			inDuration:300,
			outDuration:225
		});
    }); // end of document ready
})(jQuery); // end of jQuery name space


function addContri(eveID) {
    (function ($) {
        $(function () {
            var rep = "";
            rep += "<form id=\"formAddContri\"><input id=\"eveID\" name=\"eveID\" type=\"number\" value=\"" + eveID + "\" style=\"display:none\"><div class=\"input-field col s4\"><input placeholder=\"Nom contribution\" id=\"nomContri\" name =\"nomContri\" type=\"text\" class=\"validate\"></div>";
            rep += "         <div class=\"input-field col s2\"><input placeholder=\"qte\" id=\"qteContri\" name =\"qteContri\" type=\"number\" class=\"validate\"></div>";
            rep += "             <div class=\"input-field col s2\"><input placeholder=\"coût\" id=\"coutContri\"name =\"coutContri\"  type=\"number\" step=\"0.01\" class=\"validate\"></div><br>";
            rep += "             <a href=\"javascript:submitContri()\" class=\"waves-effect waves-light btn right\"><i class=\"material-icons right\">done</i>Valider</a></form>";
            $('#divAddContri').html(rep);
        }); // end of document ready
    })(jQuery); // end of jQuery name space
}
function addSondage(eveID) {
    (function ($) {
        $(function () {
            var rep = "";
            rep += "<form id=\"formAddSond\"><input id=\"eveID\" name=\"eveID\" type=\"number\" value=\"" + eveID + "\" style=\"display:none\">";
            rep += "         <div class=\"input-field col s4\"><input placeholder=\"Option no1\" id=\"option1\" name =\"option1\" type=\"text\" class=\"validate\"></div>";
            rep += "             <div class=\"input-field col s4\"><input placeholder=\"Option no2\" id=\"option2\"name =\"option2\"  type=\"text\" class=\"validate\"></div><br>";
            rep += "             <a href=\"javascript:submitSond()\" class=\"waves-effect waves-light btn right col s\"><i class=\"material-icons right\">done</i>Valider</a></form>";
            $('#divAddSond').html(rep);
        }); // end of document ready
    })(jQuery); // end of jQuery name space
}
/*function cacher(id) {
    var div = id;
    $(document).ready(function () {
        $('#' + div).hide();
    });
}*/
$(document).ready(function () {
    $('#btnCacher').click(function () {
        $('#alertInvitation').hide();
    });
});
