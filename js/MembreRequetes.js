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

//validation champ membre tous remplis
function ValidFormMembre() {
    var usr_prenom = document.getElementById("usr_prenom").value;
    var usr_nom = document.getElementById("usr_nom").value;
    var usr_email = document.getElementById("usr_email").value;
    var usr_password = document.getElementById("usr_password").value;
    var usr_dateN = document.getElementById("usr_dateN").value;
    var usr_ville = document.getElementById("usr_ville").value;
    var usr_pays = document.getElementById("usr_pays").value;

    if (usr_prenom == "" || usr_nom == "" || usr_email == "" || usr_password == "" || usr_dateN == "" || usr_ville == "" || usr_pays == "") {
        window.alert("Vous devez remplir tous les chants");
        return false;
    }
    else {
        inscrireMembre();
    }
}
