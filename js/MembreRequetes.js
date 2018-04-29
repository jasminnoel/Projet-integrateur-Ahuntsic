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


//Creation evenement
function ValidEvent() {
    var Event_Nom = document.getElementById("Event_Nom").value;
    var Event_Lieu = document.getElementById("Event_Lieu").value;
    var Event_Desc = document.getElementById("Event_Desc").value;
    var Event_Date_Debut = document.getElementById("Event_Date_Debut").value;
    var Event_Time = document.getElementById("Event_Time").value;

    if (Event_Nom == "" || Event_Lieu == "" || Event_Desc == "" || Event_Date_Debut == "" || Event_Time == "") {
        window.alert("Vous devez remplir tous les chants");
        return false;
    }
    else {
        CreateEvent();
    }
}

function CreateEvent() {
    var formEvent = new FormData(document.getElementById('form_event'));
    formEvent.append('action', 'enregistrerEvent');
    $.ajax({
        type: 'POST',
        url: '../Serveur/Controller/UserController.php',
        data: formEvent,
        dataType: 'json', //text pour le voir en format de string
        //async : false,
        //cache : false,
        contentType: false,
        processData: false,
        success: function (reponse) {//alert(reponse);
	    document.getElementById("form_event").reset();
            membreVue(reponse);
        },
        fail: function (err) {

        }
    });
}
//LogOff du user
function logOff(){
	var LogOff = new FormData();
    LogOff.append('action', 'LogOff');
    $.ajax({
        type: 'POST',
        url: '../Serveur/Controller/UserController.php',
        data: LogOff,
        dataType: 'json', //text pour le voir en format de string
        //async : false,
        //cache : false,
        contentType: false,
        processData: false,
        success: function (reponse) {//alert(reponse);
	   window.location.reload();
         
        },
        fail: function (err) {

        }
    });
}
//aficher événement
function affEvenementreq(id) {
    var formEvent = new FormData();
    formEvent.append('action', 'affEvenement');
    formEvent.append('Event_ID', id);
    $.ajax({
        type: 'POST',
        url: '../Serveur/Controller/EvenementController.php',
        data: formEvent,
        dataType: 'json', //text pour le voir en format de string
        //async : false,
        //cache : false,
        contentType: false,
        processData: false,
        success: function (reponse) {//alert(reponse);
            evenementVue(reponse);
        },
        fail: function (err) {

        }
    });
}
//Modif profil user
function ModifProfilUser() {
    var form_Profil_Modif = new FormData(document.getElementById('form_Profil_Modif'));
    form_Profil_Modif.append('action', 'ModifProfil');
    $.ajax({
        type: 'POST',
        url: '../Serveur/Controller/UserController.php',
        data: form_Profil_Modif,
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
//Alert - Invitations aux Evenements
function alertInvitEvent() {
    var formEvent = new FormData();
    formEvent.append('action', 'affInvitation');
    // formInvit.append('Event_ID', id);
    $.ajax({
        type: 'POST',
        url: '../Serveur/Controller/EvenementController.php',
        data: formInvit,
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

function submitContri() {
    if (document.getElementById('nomContri').value == "" || document.getElementById('qteContri').value == "" || document.getElementById('coutContri').value == "") {
        $('#nomContri').toggleClass('validate invalid');
        $('#qteContri').toggleClass('validate invalid');
        $('#coutContri').toggleClass('validate invalid');
        return false;
    } else {
    var formEvent = new FormData(document.getElementById('formAddContri'));
    formEvent.append('action', 'ajouterContri');
    $.ajax({
        type: 'POST',
        url: '../Serveur/Controller/EvenementController.php',
        data: formEvent,
        dataType: 'json', //text pour le voir en format de string
        //async : false,
        //cache : false,
        contentType: false,
        processData: false,
        success: function (reponse) {//alert(reponse);
            document.getElementById("formAddContri").reset();
            evenementVue(reponse);
        },
        fail: function (err) {

        }
        });
    }
}