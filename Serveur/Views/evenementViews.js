function affEvenement(reponse) {
    var objEve = reponse.objEve;
    var listeContri = reponse.listeContri;
    var taille = listeContri.length;
    var listeinvit = reponse.listeinvit;
    var tailleinvit = listeinvit.length;
    var listMessage = reponse.ListMessages;
    var tailleMessage = listMessage.length;
    var objMeteo = reponse.jsonmeteo;
    var listeSondages = reponse.listeSondages;
    var tailleSondages = listeSondages.length;
	var rep = "";
	rep += "<div class=\"row\">\n";
	rep += "                <!-- Nom de l'evenement -->\n";
	rep += "                <h1>" + objEve.Event_Nom + "</h1>\n";
	rep += "                <p class=\"flow-text\">" + objEve.Event_Desc + "</p>\n";
	rep += "                <div>\n";
rep += "<div class=\"row\">\n";
rep += "          <!-- colone gauche -->\n";
rep += "          <div id=\"col-gauche\" class=\"col s12 m5\">\n";
rep += "            <!-- Carte - Description de l'événement -->\n";
rep += "            <div class=\"card\">\n";
rep += "              <div class=\"card-content black-text\">\n";
rep += "                <!-- Date de l'evenement -->\n";
rep += "                <p id=\"event_date\" name=\"event_date\">Date : " + objEve.Event_Date_Debut + "</p>\n";
rep += "                <!-- Heure de l'evenement -->\n";
rep += "                <p id=\"event_heure\" name=\"event_heure\">Heure : "+ objEve.Event_Time +"</p>\n";
        var auj = new Date();
		var dateEve = new Date(objEve.Event_Date_Debut);
		var diff = dateEve.getDate() - auj.getDate();
//meteo
if(diff<=5){

	var listePrevisions = objMeteo.list;
	var taillePrevisions = listePrevisions.length;
	var dateMeteo;
	rep += "                <!-- Meteo Prevision en lien avec la date et le lieu de l'evenement -->\n";
	rep += "                <div>\n";
	rep += "                  <b>Meteo Prevue le</b> " + dateEve.getDate() + "-" + dateEve.getMonth() + "-" + dateEve.getFullYear() + "<br>\n";
	//window.alert("liste prevision = " + JSON.stringify(listePrevisions));
	//météo
		for(i=0; i<taillePrevisions; i++){
		dateMeteo = new Date(listePrevisions[i].dt_txt);
		if(dateMeteo.getDate()==dateEve.getDate()){
	rep += "                  Min : "+listePrevisions[i].main.temp_min+" °C Max : "+listePrevisions[i].main.temp_max+" °C <br>\n";
	rep += "                   <img src='http://openweathermap.org/img/w/"+listePrevisions[i].weather[0].icon+".png'>\n";
	break;
		}
	}
	rep += "                  </div>\n";
	}
rep += "                <!-- Lieu de l'evenement - coordonées google map -->\n";
rep += "                <div id=\"event_lieu\" name=\"event_lieu\">\n";
rep += "                  <h5>Lieu</h5>\n";
rep += "                  <p>" + objEve.Event_Lieu + "</p>\n";
rep += "                  <div  class=\"video-container\"><iframe frameborder=\"0\" style=\"border:0\"";
rep += "				src=\"https://www.google.com/maps/embed/v1/search?q="+objEve.Event_Lieu+",+QC&key=AIzaSyCVF_aP1ODotWoUN84733j2tLp0JqPVnJM\" allowfullscreen></iframe></div>\n";
rep += "                  </div>\n";
rep += "              </div>\n";
rep += "            </div><!-- FIN Carte - Description de l'événement -->\n";
rep += "            <!-- Carte - Messagerie -->\n";
rep += "            <div id=\"Message_ID\" class=\"card\">\n";
rep += "              <div class=\"card-content black-text\">\n";
rep += "                <span class=\"card-title\">Messages</span>\n";
rep += "                <!-- Liste des messages -->\n";
rep += "                <ul style=\"overflow-y: scroll;height:350px;\" class=\"collection\">\n";
rep += "                  <!-- Message d'un invité -->\n";
//liste des messages

                          for(i=0; i<tailleMessage; i++){

                              rep += "                  <li class=\"collection-item avatar\">\n";
                              rep += "                    <img src=\"userphotos/"+ listMessage[i].Usr_Photo +"\" alt=\"\" class=\"circle\">\n";
                                rep += "                    <span id=\"mess_date\" class=\"title\">"+ listMessage[i].Mess_Date + " " + listMessage[i].Usr_Prenom +"</span>\n";
                              rep += "                    <p id=\"mess_contenu\">"+ listMessage[i].Mess_Contenu +"</p>\n";
                              rep += "                  </li>\n";

                          }
rep += "              </div>\n";
rep +="                   <form id=\"form_Message\" name=\"form_Message\">\n";
rep += "             <a href=\"javascript:AddMessages()\" class=\"waves-effect waves-light btn right\"><i class=\"material-icons\">add</i></a>";
rep += "             <div class=\"input-field card-content\"><textarea id=\"Mess_Contenu\" name=\"Mess_Contenu\" placeholder=\"Entrez votre text ici\" class=\"materialize-textarea\"></textarea></div>";
rep +="                   </form>\n";
rep += "            </div><!-- FIN Carte - Messagerie -->\n";
rep += "          </div><!-- FIN colone gauche -->\n";
rep += "          <!-- colone droite -->\n";
rep += "          <div id=\"col-droite\" class=\"col s12 m7\">\n";
rep += "            <!-- Liste des invités a l'événement -->\n";
rep += "            <div class=\"row\">\n";
rep += "              <h5>Invités</h5>\n";
rep += "              <ul id=\"divInvit\" class=\"col s-9 valign-wrapper\">\n";
rep += "                <!-- Invité et participant -->\n";
//liste des invités
    for (var i = 0; i < tailleinvit; i++) {
        if (listeinvit[i].Invit_Statut == "par") {
            if (listeinvit[i].Usr_Photo != "") {


            rep += "                <li id=\"usr_id\" name=\"usr_id\" class=\"inline space-5\">\n";
            rep += "                  <img id=\"usr_photo\" src=\"userphotos/" + listeinvit[i].Usr_Photo + "\" alt=\"\" class=\"circle icon-invite border-success\">\n";
            rep += "                </li>\n";
            } else {
                rep += "                <li id=\"usr_id\" name=\"usr_id\" class=\"inline space-5\">\n";
                rep += "                  <div class=\"circle icon-invite border-success valign-wrapper inline center\"><h6>"+listeinvit[i].Usr_Prenom.charAt(0)+"</h6></div>\n";
                rep += "                </li>\n";
            }
        } else {
            if (listeinvit[i].Usr_Photo != "") {


                rep += "                <li id=\"usr_id\" name=\"usr_id\" class=\"inline space-5\">\n";
                rep += "                  <img id=\"usr_photo\" src=\"userphotos/" + listeinvit[i].Usr_Photo + "\" alt=\"\" class=\"circle icon-invite border-warning\">\n";
                rep += "                </li>\n";
            } else {
                rep += "                <li id=\"usr_id\" name=\"usr_id\" class=\"inline space-5\">\n";
                rep += "                  <div class=\"circle icon-invite border-warning valign-wrapper inline center\"><h6>" + listeinvit[i].Usr_Prenom.charAt(0) + "</h6></div>\n";
                rep += "                </li>\n";
            }
        }

}

rep += "              </ul>\n";
rep += "                <span id=\"btnInvit\" name=\"btnInvit\" class=\"inline right col s-3\">\n";
rep += "                  <a href=\"javascript:selectInvit(" + objEve.Event_ID + ")\" class=\"waves-effect waves-light btn\"><i class=\"material-icons right\">group_add</i>Inviter</a>\n";
rep += "                </span>\n";
rep += "            </div><!-- FIN Liste des invités -->\n";
rep += "\n";
rep += "            <!-- Liste des contributions -->\n";
rep += "            <div class=\"row\">\n";
rep += "              <div class=\"divider\"></div>\n";
rep += "              <h5>Contributions</h5>\n";
rep += "              <!-- Item -->\n";
rep += "                    <ul id=\"general\" class=\"collection\">\n";
//liste des contributions
    for (var i = 0; i < taille; i++) {
        rep += "                        <li id=\"" + listeContri[i].Cont_ID + "\" name=\"" + listeContri[i].Cont_ID + "\" class=\"collection-item valign-wrapper\">\n";
        rep += "                            <span class=\"title col s12 m6\">\n";
        rep += "                                <p id=\"cont_nom\" name=\"cont_nom\">" + listeContri[i].Cont_Nom + "</p>\n";
        rep += "                            </span>\n";
        rep += "                            <span class=\"col s12 m2\">\n";
        rep += "                                <p id=\"cont_qte\" name=\"cont_qte\">Qté :" + listeContri[i].Cont_Qte + "</p>\n";
        rep += "                            </span>\n";
        rep += "                            <span class=\"col s12 m2\">\n";
        rep += "                                <p id=\"cont_prix\" name=\"cont_prix\">Coût : " + listeContri[i].Cont_Prix + "$</p>\n";
        rep += "                            </span>\n";
        rep += "                            <span class=\"secondary-content col s12 m2\">\n";
        rep += "                                <img id=\"usr_photo\" src=\"userphotos/"+ listeContri[i].Usr_Photo +"\" alt=\"\" class=\"circle icon-contribution\">\n";
        rep += "                            </span>\n";
        rep += "                            <a href=\"javascript:DelContri(" + listeContri[i].Cont_ID + ")\" class=\"waves-effect waves-light btn right\"><i class=\"material-icons\">remove</i></a>";
        rep += "                        </li>\n";
    }

    rep += "                        <li class=\"collection-item valign-wrapper\" id=\"divAddContri\">\n";
    rep += "                           <a href=\"javascript:addContri(" + objEve.Event_ID + ")\" class=\"waves-effect waves-light btn\"><i class=\"material-icons right\">add</i>Ajouter</a>\n";
rep += "                        </li>\n";
rep += "                    </ul>\n";
rep += "            </div><!-- FIN Liste des contributions -->  \n";

rep += "            <!-- Liste des sondages -->\n";

rep += "              <div class=\"divider\"></div>\n";
rep += "              <h5>Sondages</h5>\n";
// liste des sondages
for (var i = 0; i < tailleSondages; i++) {

    rep += "                        <div id=\"" + listeSondages[i].Sond_ID + "\" class=\"card collection\"> \n";
    rep += "                            <a href=\"javascript:voter(1," + listeSondages[i].Sond_ID + ")\" class=\"col s6 collection-item center-align flow-text card-action\" id=\"sond1_nom\" name=\"sond1_nom\">" + listeSondages[i].Sondage_Option1_Nom + "<span id=\"option1" + listeSondages[i].Sond_ID + "\" class=\"badge teal white-text sond1_badge\">" + listeSondages[i].Sondage_Option1_NbVotes + "</span></a>\n";
    rep += "                             <a href=\"javascript:voter(2," + listeSondages[i].Sond_ID + ")\" class=\"col s6 collection-item center-align flow-text card-action\" id=\"sond2_nom\" name=\"sond2_nom\">" + listeSondages[i].Sondage_Option2_Nom + "<span id=\"option2" + listeSondages[i].Sond_ID + "\" class=\"badge teal white-text sond2_badge\">" + listeSondages[i].Sondage_Option2_NbVotes + "</span></a>\n";
    rep += "                        </div>\n";
}

rep += "                        <div col s12\" id=\"divAddSond\">\n";
rep += "                           <a href=\"javascript:addSondage(" + objEve.Event_ID + ")\" class=\"waves-effect waves-light btn\"><i class=\"material-icons right\">add</i>Ajouter</a>\n";
rep += "            </div>";
rep += "            </div><!-- FIN Liste des sondages -->  \n";
rep += "          </div><!-- FIN colone droite -->\n";
rep += "        </div><!-- FIN row -->\n";
    
    
 var repMenu = "";
     repMenu += "                  <li><a class=\"button\" href=\"javascript:RetourMembre();\"><i class=\"material-icons teal-text\">event_note</i></a>\n";
    repMenu += "                  <li><a class=\"button\" href=\"javascript:logOff();\"><i class=\"material-icons teal-text\">exit_to_app</i></a>\n";


    $('#container').html(rep);
    $('#menu-droite').html(repMenu);
}
//ajout d'une contribution
function appendContri(reponse) {
    var rep = "";
    rep += "                        <li id=\"" + reponse.Cont_ID + "\" name=\"" + reponse.Cont_ID + "\" class=\"collection-item valign-wrapper\">\n";
    rep += "                            <span class=\"title col s12 m6\">\n";
    rep += "                                <p id=\"cont_nom\" name=\"cont_nom\">" + reponse.nomContri + "</p>\n";
    rep += "                            </span>\n";
    rep += "                            <span class=\"col s12 m2\">\n";
    rep += "                                <p id=\"cont_qte\" name=\"cont_qte\">Qté :" + reponse.qteContri + "</p>\n";
    rep += "                            </span>\n";
    rep += "                            <span class=\"col s12 m2\">\n";
    rep += "                                <p id=\"cont_prix\" name=\"cont_prix\">Coût : " + reponse.coutContri + "$</p>\n";
    rep += "                            </span>\n";
    rep += "                            <span class=\"secondary-content col s12 m2\">\n";
     rep += "                                <img id=\"usr_photo\" src=\"userphotos/"+reponse.Usr_Photo+"\" alt=\"\" class=\"circle icon-contribution\">\n";
    rep += "                            </span>\n";
    rep += "                            <a href=\"javascript:DelContri(" + reponse.Cont_ID + ")\" class=\"waves-effect waves-light btn right\"><i class=\"material-icons\">remove</i></a>";
    rep += "                        </li>\n";
    $('#divAddContri').before(rep);
}
//ajout d'un sondage
function affSondageView(reponse) {
    var rep = "";
    rep += "                        <div id=\"" + reponse.last_id + "\" class=\"card collection\"> \n";
    rep += "                            <a href=\"javascript:voter(1," + reponse.last_id + ")\" class=\"col s6 collection-item center-align flow-text card-action\" id=\"sond1_nom\" name=\"sond1_nom\">" + reponse.option1 + "<span id=\"option1" + reponse.last_id + "\" class=\"badge teal white-text sond1_badge\">0</span></a>\n";
    rep += "                             <a href=\"javascript:voter(2," + reponse.last_id + ")\" class=\"col s6 collection-item center-align flow-text card-action\" id=\"sond2_nom\" name=\"sond2_nom\">" + reponse.option2 + "<span id=\"option1" + reponse.last_id + "\" class=\"badge teal white-text sond2_badge\">0</span></a>\n";
    rep += "                        </div>\n";
	//window.alert(rep);
    $('#divAddSond').before(rep);
}
function selectInvitView(reponse) {
    var listeMembres = reponse.listeMembres;
    var taille = listeMembres.length;
    var listeinvites = reponse.listeinvites;
    var tailleInvit = listeinvites.length;
    var rep = "";
    for (var i = 0; i < taille; i++) {
        rep += "                        <li class=\"collection-item avatar valign-wrapper\">\n";
        rep += "                                <img id=\"usr_photo\" src=\"userphotos/" + listeMembres[i].Usr_Photo + "\" alt=\"\" class=\"circle icon-contribution right\">\n";
        rep += "                            <span class=\"title\">\n";
        rep += "                                <p id=\"cont_nom\" name=\"cont_nom\">" + listeMembres[i].Usr_Prenom + " " + listeMembres[i].Usr_Nom + "</p>\n";
        rep += "                            </span>\n";
        rep += "                  <a id=\"btn" + listeMembres[i].Usr_ID +"\" href=\"javascript:sendInvit(" + reponse.Event_ID + "," + listeMembres[i].Usr_ID + ")\" class=\"secondary-content waves-effect waves-light btn\"><i class=\"material-icons\">person_add</i></a>\n";
        rep += "                  <i id=\"icon" + listeMembres[i].Usr_ID +"\" class=\"material-icons secondary-content teal-text hidden\">check_circle</i></a>\n";
        rep += "                        </li>\n";
    }
    for (var i = 0; i < tailleInvit; i++) {
        rep += "                        <li class=\"collection-item avatar valign-wrapper\">\n";
        rep += "                                <img id=\"usr_photo\" src=\"userphotos/" + listeinvites[i].Usr_Photo + "\" alt=\"\" class=\"circle icon-contribution right\">\n";
        rep += "                            <span class=\"title\">\n";
        rep += "                                <p id=\"cont_nom\" name=\"cont_nom\">" + listeinvites[i].Usr_Prenom + " " + listeinvites[i].Usr_Nom + "</p>\n";
        rep += "                            </span>\n";
        rep += "                  <i class=\"material-icons secondary-content teal-text\">check_circle</i></a>\n";
        rep += "                        </li>\n";
    }
    $('#listeMembres').html(rep);

}


function ReloadMessages(reponse){
  var listMessage = reponse.ListMessages;
  var tailleMessage = listMessage.length;
var rep = "";
rep += "            <div id=\"Message_ID\" class=\"card\">\n";
rep += "              <div class=\"card-content black-text\">\n";
rep += "                <span class=\"card-title\">Messages</span>\n";
rep += "                <!-- Liste des messages -->\n";
rep += "                <ul style=\"overflow-y: scroll;height:300px;\" class=\"collection\">\n";
rep += "                  <!-- Message d'un invité -->\n";

                          for(i=0; i<tailleMessage; i++){

                              rep += "                  <li class=\"collection-item avatar\">\n";
                              rep += "                    <img src=\"userphotos/"+ listMessage[i].Usr_Photo +"\" alt=\"\" class=\"circle\">\n";
                              rep += "                    <span id=\"mess_date\" class=\"title\">"+ listMessage[i].Mess_Date + " " + listMessage[i].Usr_Prenom +"</span>\n";
                              rep += "                    <p id=\"mess_contenu\">"+ listMessage[i].Mess_Contenu +"</p>\n";
                              rep += "                  </li>\n";

                          }
rep += "              </div>\n";
rep +="                   <form id=\"form_Message\" name=\"form_Message\">\n";
rep += "             <a href=\"javascript:AddMessages()\" class=\"waves-effect waves-light btn right\"><i class=\"material-icons\">add</i></a>";
rep += "             <div class=\"input-field \"><textarea id=\"Mess_Contenu\" name=\"Mess_Contenu\" placeholder=\"Entrez votre text ici\" class=\"materialize-textarea\"></textarea></div>";
rep +="                   </form>\n";
  $('#Message_ID').html(rep);
}
function sendInvitView(reponse) {
    var iconID = "icon" + reponse.Usr_ID;
    var btnID = "btn" + reponse.Usr_ID;
    var Usr_Photo = reponse.Usr_Photo;
    var Usr_Prenom = reponse.Usr_Prenom;
    var rep = "";
    if (Usr_Photo != "") {


        rep += "                <li id=\"usr_id\" name=\"usr_id\" class=\"inline space-5\">\n";
        rep += "                  <img id=\"usr_photo\" src=\"userphotos/" + Usr_Photo + "\" alt=\"\" class=\"circle icon-invite border-warning\">\n";
        rep += "                </li>\n";
    } else {
        rep += "                <li id=\"usr_id\" name=\"usr_id\" class=\"inline space-5\">\n";
        rep += "                  <div class=\"circle icon-invite border-warning valign-wrapper inline center\"><h6>" + Usr_Prenom.charAt(0) + "</h6></div>\n";
        rep += "                </li>\n";
    }
    $(document).ready(function () {
        $('#' + btnID).hide();
        $('#' + iconID).show();
        $('#divInvit').append(rep);
    });
}
function rejoindreEveView(reponse) {
    var eve = reponse.objeve;
    var rep = "";
    rep += "                          <a class=\"collection-item\" href=\"javascript:affEvenementreq(" + eve.Event_ID + ")\">\n";
    rep += "                              <span class=\"title\">" + eve.Event_Nom + "</span>\n";
    rep += "                              <span class=\"secondary-content valign-wrapper\"><i class=\"material-icons\">group</i>4</span>\n";
    rep += "                              <span class=\"secondary-content valign-wrapper\"><i class=\"material-icons\">email</i>4</span>\n";
    rep += "                              <br /><span>" + eve.Event_Date_Debut + "</span>\n";
    rep += "                          </a>\n";
    $('#listeEvePar').append(rep);
}

function affVotesView(reponse){
	var nbVotes = reponse.nb_votes;
	var no_option = reponse.no_option;
	var sond_id = reponse.Sond_ID;
	//alert(JSON.stringify(reponse));
	
	if (no_option==1){
		//alert(no_option);
		//$(document).ready(function () {
		//$('#option1'+sond_id).text(nbVotes);
		//});
		var divOK = "#option1"+sond_id;
		var divNON = "#option2"+sond_id;
	} else {
		//alert(no_option);
		//$(document).ready(function () {
		//$('#option2'+sond_id).text(nbVotes);
		//});
		var divOK = "#option2"+sond_id;
		var divNON = "#option1"+sond_id;
	}
	//$(document).ready(function () {
	$(divOK).parent().attr("href", "#");
	$(divOK).parent().addClass("teal accent-1");
	$(divOK).html(nbVotes);
	$(divNON).parent().attr("href", "#");
	$(divNON).parent().addClass("grey lighten-3");
	//});
}


var evenementVue = function (reponse) {
    var action = reponse.action;
    switch (action) {
        case "connexBloque":
            $('#messages').html(reponse.msg);
            setTimeout(function () { $('#messages').html(""); }, 5000);
            break;
        case "affEvenement":
            affEvenement(reponse);
            break;
        case "addContri":
            appendContri(reponse);
            break;
        case "selectInvit":
            selectInvitView(reponse);
            break;
        case "sendInvit":
            sendInvitView(reponse);
            break;
        case "rejoindreEve":
            rejoindreEveView(reponse);
            break;
        case "affSondage":
            affSondageView(reponse);
            break;
		case "affVotes":
            affVotesView(reponse);
            break;
    }
}
