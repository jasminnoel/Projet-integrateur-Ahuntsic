//requetes membre
function inscrireMembre(){
    var formMembre = new FormData(document.getElementById('form_membre'));
	formMembre.append('action','enregistrer');//alert(form_membre.get("usr_dateN"));
	$.ajax({
		type : 'POST',
		url : '../Serveur/Controller/MembreController.php',
		data : formMembre,
		dataType : 'json', //text pour le voir en format de string
		//async : false,
		//cache : false,
		contentType : false,
		processData : false,
		success : function (reponse){//alert(reponse);
					membreVue(reponse);
		},
		fail : function (err){

		}
	});
}
function validerConnex() {
    var formConnex = new FormData(document.getElementById('form_connex'));
    formConnex.append('action', 'validerConnex');//alert(form_membre.get("usr_dateN"));
    $.ajax({
        type: 'POST',
        url: '../Serveur/Controller/MembreController.php',
        data: formConnex,
        dataType: 'json', //text pour le voir en format de string
        //async : false,
        //cache : false,
        contentType: false,
        processData: false,
        success: function (reponse) {//alert(reponse);
            membreVue(reponse);
        },
        fail: function (err) {

        }
    });
}
