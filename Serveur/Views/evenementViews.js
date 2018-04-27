function affEvenement(reponse) {
    var objEve = reponse.objEve;
    var listeContri = reponse.listeContri;
    var taille = listeContri.length;

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
rep += "                <p id=\"event_heure\" name=\"event_heure\">Heure debut</p>\n";
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
rep += "            <div class=\"card\">\n";
rep += "              <div class=\"card-content black-text\">\n";
rep += "                <span class=\"card-title\">Messages</span>\n";
rep += "                <!-- Liste des messages -->\n";
rep += "                <ul class=\"collection\">\n";
rep += "                  <!-- Message d'un invité -->\n";
rep += "                  <li class=\"collection-item avatar\">\n";
rep += "                    <img src=\"images/user-labrune.jpg\" alt=\"\" class=\"circle\">\n";
rep += "                    <span id=\"mess_date\" class=\"title\">5:30 PM</span>\n";
rep += "                    <p id=\"mess_contenu\">Ton événement c'est de la marde!</p>\n";
rep += "                  </li>\n";
rep += "                  <li class=\"collection-item avatar\">\n";
rep += "                    <img src=\"images/user-lablonde.jpg\" alt=\"\" class=\"circle\">\n";
rep += "                    <span id=\"mess_date\" class=\"title\">10:15 AM</span>\n";
rep += "                    <p id=\"mess_contenu\">J'ai hate a demain, ca va etre foue</p>\n";
rep += "                  </li>\n";
rep += "                  <li class=\"collection-item avatar\">\n";
rep += "                    <img src=\"images/user-larousse.jpg\" alt=\"\" class=\"circle\">\n";
rep += "                    <span id=\"mess_date\" class=\"title\">Hier, 9:45 PM</span>\n";
rep += "                    <p id=\"mess_contenu\">C'est quoi comme picnic... j'apporte quoi</p>\n";
rep += "                  </li>\n";
rep += "                </ul>\n";
rep += "              </div>\n";
rep += "            </div><!-- FIN Carte - Messagerie -->\n";
rep += "          </div><!-- FIN colone gauche -->\n";
rep += "          <!-- colone droite -->\n";
rep += "          <div id=\"col-droite\" class=\"col s12 m8\">\n";
rep += "            <!-- Liste des invités a l'événement -->\n";
rep += "            <div>\n";
rep += "              <h6>Invités</h6>\n";
rep += "              <ul>\n";
rep += "                <!-- Invité et participant -->\n";
rep += "                <li id=\"usr_id\" name=\"usr_id\" class=\"inline space-5\">\n";
rep += "                  <img id=\"usr_photo\" src=\"images/user-labrune.jpg\" alt=\"\" class=\"circle icon-invite border-success\">\n";
rep += "                </li>\n";
rep += "                <li id=\"usr_id\" name=\"usr_id\" class=\"inline space-5\">\n";
rep += "                  <img id=\"usr_photo\" src=\"images/user-lablonde.jpg\" alt=\"\" class=\"circle icon-invite border-success\">\n";
rep += "                </li>\n";
rep += "                <li id=\"usr_id\" name=\"usr_id\" class=\"inline space-5\">\n";
rep += "                  <img id=\"usr_photo\" src=\"images/user-larousse.jpg\" alt=\"\" class=\"circle icon-invite border-success\">\n";
rep += "                </li>\n";
rep += "                <li id=\"usr_id\" name=\"usr_id\" class=\"inline space-5\">\n";
rep += "                  <img id=\"usr_photo\" src=\"images/user-labrune.jpg\" alt=\"\" class=\"circle icon-invite border-success\">\n";
rep += "                </li>\n";
rep += "                <!-- Juste Invité -->\n";
rep += "                <li id=\"usr_id\" name=\"usr_id\" class=\"inline space-5\">\n";
rep += "                  <img id=\"usr_photo\" src=\"images/user-lablonde.jpg\" alt=\"\" class=\"circle icon-invite\">\n";
rep += "                </li>\n";
rep += "                <li id=\"usr_id\" name=\"usr_id\" class=\"inline space-5\">\n";
rep += "                  <img id=\"usr_photo\" src=\"images/user-larousse.jpg\" alt=\"\" class=\"circle icon-invite\">\n";
rep += "                </li>\n";
rep += "              </ul>\n";
rep += "            </div><!-- FIN Liste des invités -->\n";
rep += "\n";
rep += "            <!-- Liste des contributions -->\n";
rep += "            <div class=\"row\">\n";
rep += "              <div class=\"divider\"></div>\n";
rep += "              <h5>Contributions</h5>\n";
rep += "              <!-- Item -->\n";
rep += "                    <ul class=\"collection\">\n";
    for (var i = 0; i < taille; i++) {
        rep += "                        <li class=\"collection-item valign-wrapper\">\n";
        rep += "                            <span class=\"title col s12 m6\">\n";
        rep += "                                <p id=\"cont_nom\" name=\"cont_nom\">" + listeContri[i].Cont_Nom + "</p>\n";
        rep += "                            </span>\n";
        rep += "                            <span class=\"col s12 m2\">\n";
        rep += "                                <p id=\"cont_qte\" name=\"cont_qte\">" + listeContri[i].Cont_Qte + "</p>\n";
        rep += "                            </span>\n";
        rep += "                            <span class=\"col s12 m2\">\n";
        rep += "                                <p id=\"cont_prix\" name=\"cont_prix\">" + listeContri[i].Cont_Prix + "</p>\n";
        rep += "                            </span>\n";
        rep += "                            <span class=\"secondary-content col s12 m2\">\n";
        rep += "                                <img id=\"usr_photo\" src=\"images/user-lablonde.jpg\" alt=\"\" class=\"circle icon-contribution\">\n";
        rep += "                            </span>\n";
        rep += "                        </li>\n";
    }

rep += "                        <li class=\"collection-item valign-wrapper\" id=\"divAddContri\">\n";
    rep += "                           <a href=\"javascript:addContri()\" class=\"waves-effect waves-light btn\"><i class=\"material-icons right\">add</i>Ajouter</a>\n";
rep += "                        </li>\n";
rep += "                    </ul>\n";
rep += "            </div><!-- FIN Liste des contributions -->  \n";
rep += "          </div><!-- FIN colone droite -->\n";
rep += "        </div><!-- FIN row -->\n";
$('#container').html(rep);
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
    }
}