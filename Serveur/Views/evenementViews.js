function affEvenement(reponse) {
    var objEve = reponse.objEve;
    var listeContri = reponse.listeContri;
    var taille = listeContri.length;
    var listeinvit = reponse.listeinvit;
    var tailleinvit = listeinvit.length;
    var listMessage = reponse.ListMessages;
    var tailleMessage = listMessage.length;

var rep = "";
rep += "<div class=\"row\">\n";
rep += "          <!-- colone gauche -->\n";
rep += "          <div id=\"col-gauche\" class=\"col s12 m4\">\n";
rep += "            <!-- Carte - Description de l'événement -->\n";
rep += "            <div class=\"card\">\n";
rep += "              <div class=\"card-content black-text\">\n";
rep += "                <!-- Nom de l'evenement -->\n";
rep += "                <span id=\"event_nom\" name=\"event_nom\" class=\"card-title\">"+objEve.Event_Nom+"</span>\n";
rep += "                <!-- Date de l'evenement -->\n";
rep += "                <p id=\"event_date\" name=\"event_date\">" + objEve.Event_Date_Debut + "</p>\n";
rep += "                <!-- Heure de l'evenement -->\n";
rep += "                <p id=\"event_heure\" name=\"event_heure\">Heure debut: "+ objEve.Event_Time +"</p>\n";
rep += "                <!-- Meteo Prevision en lien avec la date et le lieu de l'evenement -->\n";
rep += "                <div>\n";
rep += "                  Meteo Prevue\n";
rep += "                  <pre class=\"grey\">API Meteo</pre></div>\n";
rep += "                <!-- Lieu de l'evenement - coordonées google map -->\n";
rep += "                <div id=\"event_lieu\" name=\"event_lieu\">\n";
rep += "                  Lieu\n";
rep += "                  <pre class=\"grey\">API Google Map\n";
rep += "\n";
rep += "                  </pre></div>\n";
rep += "              </div>\n";
rep += "            </div><!-- FIN Carte - Description de l'événement -->\n";
rep += "            <!-- Carte - Messagerie -->\n";
rep += "            <div id=\"Message_ID\" class=\"card\">\n";
rep += "              <div class=\"card-content black-text\">\n";
rep += "                <span class=\"card-title\">Messages</span>\n";
rep += "                <!-- Liste des messages -->\n";
rep += "                <ul class=\"collection\">\n";
rep += "                  <!-- Message d'un invité -->\n";

                          for(i=0; i<tailleMessage; i++){

                              rep += "                  <li class=\"collection-item avatar\">\n";
                              rep += "                    <img src=\"userphotos/"+ listMessage[i].Usr_Photo +"\" alt=\"\" class=\"circle\">\n";
                              rep += "                    <span id=\"mess_date\" class=\"title\">"+ listMessage[i].Mess_Date +"</span>\n";
                              rep += "                    <p id=\"mess_contenu\">"+ listMessage[i].Mess_Contenu +"</p>\n";
                              rep += "                  </li>\n";

                          }
rep +="                   <form id=\"form_Message\" name=\"form_Message\">\n";
rep += "             <a href=\"javascript:AddMessages()\" class=\"waves-effect waves-light btn right\"><i class=\"material-icons\">add</i></a>";
rep += "             <div class=\"input-field \"><textarea id=\"Mess_Contenu\" name=\"Mess_Contenu\" placeholder=\"Entrez votre text ici\" class=\"materialize-textarea\"></textarea></div>";
rep +="                   </form>\n";
rep += "              </div>\n";
rep += "            </div><!-- FIN Carte - Messagerie -->\n";
rep += "          </div><!-- FIN colone gauche -->\n";
rep += "          <!-- colone droite -->\n";
rep += "          <div id=\"col-droite\" class=\"col s12 m8\">\n";
rep += "            <!-- Liste des invités a l'événement -->\n";
rep += "            <div>\n";
rep += "              <h6>Invités</h6>\n";
rep += "              <ul class=\"valign-wrapper\">\n";
rep += "                <!-- Invité et participant -->\n";
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
    for (var i = 0; i < taille; i++) {
        rep += "                        <li class=\"collection-item valign-wrapper\">\n";
        rep += "                            <span class=\"title col s12 m6\">\n";
        rep += "                                <p id=\"cont_nom\" name=\"cont_nom\">" + listeContri[i].Cont_Nom + "</p>\n";
        rep += "                            </span>\n";
        rep += "                            <span class=\"col s12 m2\">\n";
        rep += "                                <p id=\"cont_qte\" name=\"cont_qte\">Qté :" + listeContri[i].Cont_Qte + "</p>\n";
        rep += "                            </span>\n";
        rep += "                            <span class=\"col s12 m2\">\n";
        rep += "                                <p id=\"cont_prix\" name=\"cont_prix\">Coût : " + listeContri[i].Cont_Prix + "</p>\n";
        rep += "                            </span>\n";
        rep += "                            <span class=\"secondary-content col s12 m2\">\n";
        rep += "                                <img id=\"usr_photo\" src=\"images/user-lablonde.jpg\" alt=\"\" class=\"circle icon-contribution\">\n";
        rep += "                            </span>\n";
        rep += "                        </li>\n";
    }

    rep += "                        <li class=\"collection-item valign-wrapper\" id=\"divAddContri\">\n";
    rep += "                           <a href=\"javascript:addContri(" + objEve.Event_ID + ")\" class=\"waves-effect waves-light btn\"><i class=\"material-icons right\">add</i>Ajouter</a>\n";
rep += "                        </li>\n";
rep += "                    </ul>\n";
rep += "            </div><!-- FIN Liste des contributions -->  \n";
rep += "          </div><!-- FIN colone droite -->\n";
rep += "        </div><!-- FIN row -->\n";
$('#container').html(rep);
}

function appendContri(reponse) {
    var rep = "";
    rep += "                        <li class=\"collection-item valign-wrapper\">\n";
    rep += "                            <span class=\"title col s12 m6\">\n";
    rep += "                                <p id=\"cont_nom\" name=\"cont_nom\">" + reponse.nomContri + "</p>\n";
    rep += "                            </span>\n";
    rep += "                            <span class=\"col s12 m2\">\n";
    rep += "                                <p id=\"cont_qte\" name=\"cont_qte\">" + reponse.qteContri + "</p>\n";
    rep += "                            </span>\n";
    rep += "                            <span class=\"col s12 m2\">\n";
    rep += "                                <p id=\"cont_prix\" name=\"cont_prix\">" + reponse.coutContri + "</p>\n";
    rep += "                            </span>\n";
    rep += "                            <span class=\"secondary-content col s12 m2\">\n";
    rep += "                                <img id=\"usr_photo\" src=\"images/user-lablonde.jpg\" alt=\"\" class=\"circle icon-contribution\">\n";
    rep += "                            </span>\n";
    rep += "                        </li>\n";
    $('#divAddContri').before(rep);
}
function selectInvitView(reponse) {
    var listeMembres = reponse.listeMembres;
    var taille = listeMembres.length;
    var rep = "";
    for (var i = 0; i < taille; i++) {
        rep += "                        <li class=\"collection-item valign-wrapper\">\n";
        rep += "                            <span class=\"title col s12 m3\">\n";
        rep += "                                <p id=\"cont_nom\" name=\"cont_nom\">" + listeMembres[i].Usr_Prenom + "</p>\n";
        rep += "                            </span>\n";
        rep += "                            <span class=\"col s12 m3\">\n";
        rep += "                                <p id=\"cont_qte\" name=\"cont_qte\">" + listeMembres[i].Usr_Nom + "</p>\n";
        rep += "                            </span>\n";
        rep += "                            <span class=\"secondary-content col s12 m6\">\n";
        rep += "                                <img id=\"usr_photo\" src=\"userphotos/" + listeMembres[i].Usr_Photo + "\" alt=\"\" class=\"circle icon-contribution right\">\n";
        rep += "                            </span>\n";
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
                              rep += "                    <span id=\"mess_date\" class=\"title\">"+ listMessage[i].Mess_Date +"</span>\n";
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
    }
}
