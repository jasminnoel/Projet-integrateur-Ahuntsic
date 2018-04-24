function vueUser(reponse) {
    var listeEvenement = reponse.listeEve;
    var taille = listeEvenement.length;
    var rep = "";
    rep += "<script src=\"js/global.js\"></script>\n";
    rep += "<div class=\"row\">\n";
    rep += "              <h2>Bienvenue " + reponse.prenom + "!</h2>\n";
    rep += "    </div>\n";
    rep += "          <div class=\"row\">\n";
    rep += "\n";
    rep += "              <div id=\"col-gauche\" class=\"col s12 m8\">\n";
    rep += "                  <!-- Carte - Notification -->\n";
    rep += "                  <div class=\"row\">\n";
    rep += "                      <div class=\"card grey lighten-3\">\n";
    rep += "                          <div class=\"card-content valign-wrapper\">\n";
    rep += "                              <div class=\"col m1 valign-wrapper hide-on-med-and-down\">\n";
    rep += "                                  <i class=\"material-icons grey-text lighten-3\">perm_contact_calendar</i>\n";
    rep += "                              </div>\n";
    rep += "                              <div class=\"col s12 m8\">\n";
    rep += "                                  <span class=\"\">Vous avez 4 nouvelles invitations. Confirmez votre présence dès maintenant!</span>\n";
    rep += "                              </div>\n";
    rep += "                              <div class=\"col s12 m3\">\n";
    rep += "                                  <div class=\"right\">\n";
    rep += "                                      <a class=\"waves-effect waves-light btn teal white-text\">Voir</a>\n";
    rep += "                                      <a class=\"waves-effect waves-light btn-flat\"><i class=\"material-icons\">clear</i></a>\n";
    rep += "                                  </div>\n";
    rep += "                              </div>\n";
    rep += "                          </div>\n";
    rep += "                      </div>\n";
    rep += "                  </div>\n";
    rep += "                  <div class=\"row\">\n";
    rep += "                      <h5>Événements à venir</h5>\n";
    rep += "                      <div class=\"collection\">\n";
    for (var i = 0; i < taille; i++) {
        var auj = new Date();
        var dateEv = new Date(listeEvenement[i].Event_Date_Debut)
        if (dateEv >= auj) {
            rep += "                          <a class=\"collection-item\" href=\"javascript:affEvenementreq(" + listeEvenement[i].Event_ID + ")\">\n";
        rep += "                              <span class=\"title\">" + listeEvenement[i].Event_Nom + "</span>\n";
        rep += "                              <span class=\"secondary-content valign-wrapper\"><i class=\"material-icons\">group</i>4</span>\n";
        rep += "                              <span class=\"secondary-content valign-wrapper\"><i class=\"material-icons\">email</i>4</span>\n";
        rep += "                              <br /><span>" + listeEvenement[i].Event_Date_Debut + "</span>\n";
        rep += "                          </a>\n";
        }
    }
    rep += "                      </div>\n";
    rep += "                  </div>\n";
    rep += "                  <div class=\"row\">\n";
    rep += "                      <h5>Événements archivés</h5>\n";
    rep += "                      <div class=\"collection\">\n";
    for (var i = 0; i < taille; i++) {
        var auj = new Date();
        var dateEv = new Date(listeEvenement[i].Event_Date_Debut)
        if (dateEv < auj) {
            rep += "                          <a class=\"collection-item\" href=\"#\">\n";
            rep += "                              <span class=\"title\">" + listeEvenement[i].Event_Nom + "</span>\n";
            rep += "                              <span class=\"secondary-content valign-wrapper\"><i class=\"material-icons\">group</i>4</span>\n";
            rep += "                              <span class=\"secondary-content valign-wrapper\"><i class=\"material-icons\">email</i>4</span>\n";
            rep += "                              <br /><span>" + listeEvenement[i].Event_Date_Debut + "</span>\n";
            rep += "                          </a>\n";
        }
    }
    rep += "                      </div>\n";
    rep += "                  </div>\n";
    rep += "              </div><!-- FIN colonne -->\n";


    rep += "\n";
    rep += "              <div id=\"col-droite\" class=\"col s12 m4\">\n";
    rep += "                  <!-- Carte - Créer evenement -->\n";
    rep += "                  <div class=\"card teal right\">\n";
    rep += "                      <div class=\"card-content\">\n";
    rep += "                          <p class=\"flow-text white-text center-align\">Créez votre propre événement!</p>\n";
    rep += "                      </div>\n";
    rep += "                      <div class=\"card-action\">\n";
    rep += "                          <a class=\"btn-floating halfway-fab waves-effect waves-light red btn-large modal-trigger\" data-beloworigin=\"true\" href=\"#modal1\"><i class=\"material-icons\">add</i></a>\n";
    rep += "                      </div>\n";
    rep += "\n";
    rep += "                  </div>\n";
    rep += "              </div>\n";
    rep += "          </div><!-- FIN row -->\n";

    rep += " <div id=\"modal1\" class=\"modal\">";
    rep += "   <div class=\"modal-content\">";
    rep += "       <h4>Création d'un evenement</h4>";
    rep += "       <div class=\"row\">";
    rep += "          <form name=\"form_event\" id=\"form_event\" class=\"col s12\">";
    rep += "               <div class=\"row\">";
    rep += "                    <!-- Input Description -->";
    rep += "                <div class=\"input - field col s6\">";
    rep += "                        <input id=\"Event_Nom\" name=\"Event_Nom\" type=\"text\" class=\"validate\">";
    rep += "                            <label for=\"Event_Nom\">Nom</label>";
    rep += "                </div>";
    rep += "                       <!-- Input lieu -->";
    rep += "                <div class=\"input - field col s6\">";
    rep += "                           <input id=\"Event_Lieu\" name=\"Event_Lieu\" type=\"text\" class=\"validate\">";
    rep += "                               <label for=\"Event_Lieu\">Lieu</label>";
    rep += "                </div>";
    rep += "                </div>";
    rep += "                <!-- Input nom -->";
    rep += "    <div class=\"row\">";
    rep += "                    <div class=\"input - field col s12\">";
    rep += "                        <input id=\"Event_Desc\" name=\"Event_Desc\" type=\"text\" class=\"validate\">";
    rep += "                            <label for=\"Event_Desc\">Description</label>";
    rep += "        </div>";
    rep += "                    </div>";
    rep += "                    <!-- Input Date de l'evenement -->";
    rep += "    <div class=\"row\">";
    rep += "                        <div class=\"input - field col s12\">";
    rep += "                            <input id=\"Event_Date_Debut\" name=\"Event_Date_Debut\" type=\"date\" class=\"validate\">";
    rep += "                                <label for=\"Event_Date_Debut\">Date de l'évènement</label>";
    rep += "        </div>";
    rep += "                        </div>";
    rep += "                        <!-- Input Heure de l'event -->";
    rep += "    <div class=\"row\">";
    rep += "                            <div class=\"input - field col s12\">";
    rep += "                                <input id=\"Event_Time\" name=\"Event_Time\" type=\"text\" class=\"validate\">";
    rep += "                                    <label for=\"Event_Time\">Heure de début</label>";
    rep += "        </div>";
    rep += "                            </div>";
    rep += "</form>";
    rep += "                    </div>";
    rep += "                    <div class=\"modal-footer\">";
    rep += "                        <button class=\"btn waves - effect waves - light modal-close\" type=\"button\" onclick=\"ValidEvent()\" name=\"action\">Créer</a>";
    rep += "                    </div>";
    rep += "                </div>";
	rep += "</div>";
	
	rep += " <div id=\"modal2\" class=\"modal\">";
    rep += "   <div class=\"modal-content\">";
    rep += "       <h4>Profil utilisateur</h4>";
    rep += "       <div class=\"row\">";
    rep += "          <form name=\"form_Profil_Modif\" id=\"form_Profil_Modif\" class=\"col s12\">";
    rep += "               <div class=\"row\">";
    rep += "                    <!-- Input Description -->";
    rep += "                <div class=\"input - field col s6\">";
    rep += "                        <input id=\"Usr_Prenom\" name=\"Usr_Prenom\" type=\"text\" class=\"validate\">";
    rep += "                            <label for=\"Usr_Prenom\">Prenom</label>";
    rep += "                </div>";
    rep += "                       <!-- Input lieu -->";
    rep += "                <div class=\"input - field col s6\">";
    rep += "                           <input id=\"Usr_Nom\" name=\"Usr_Nom\" type=\"text\" class=\"validate\">";
    rep += "                               <label for=\"Usr_Nom\">Nom</label>";
    rep += "                </div>";
    rep += "                </div>";
    rep += "                <!-- Input nom -->";
    rep += "    <div class=\"row\">";
    rep += "                    <div class=\"input - field col s12\">";
    rep += "                        <input id=\"Usr_Email\" name=\"Usr_Email\" type=\"Email\" class=\"validate\">";
    rep += "                            <label for=\"Usr_Email\">Courriel</label>";
    rep += "        </div>";
    rep += "                    </div>";
    rep += "                    <!-- Input Date de l'evenement -->";
    rep += "    <div class=\"row\">";
    rep += "                        <div class=\"input - field col s12\">";
    rep += "                            <input id=\"Usr_DateN\" name=\"Usr_DateN\" type=\"date\" class=\"validate\">";
    rep += "                                <label for=\"Usr_DateN\">Date de naissance</label>";
    rep += "        </div>";
    rep += "                        </div>";
    rep += "                        <!-- Input Heure de l'event -->";
    rep += "    <div class=\"row\">";
    rep += "                            <div class=\"input - field col s12\">";
    rep += "                                <input id=\"Usr_Ville\" name=\"Usr_Ville\" type=\"text\" class=\"validate\">";
    rep += "                                    <label for=\"Usr_Ville\">Ville</label>";
    rep += "        </div>";
    rep += "                            </div>";
		rep += "    <div class=\"row\">";
    rep += "                            <div class=\"input - field col s12\">";
    rep += "                                <input id=\"Usr_Password\" name=\"Usr_Password\" type=\"password\" class=\"validate\">";
    rep += "                                    <label for=\"Usr_Password\">Password</label>";
    rep += "        </div>";
    rep += "                            </div>";
		rep += "    <div class=\"row\">";
    rep += "                            <div class=\"input - field col s12\">";
	rep += "					<select id=\"Usr_Pays\" name=\"Usr_Pays\">";
    rep += "                    <option value=\"\" disabled selected>Votre Pays</option>";
    rep += "                    <option value=\"canada\">Canada</option>";
    rep += "                   <option value=\"usa\">États-Unis</option>";
    rep += "                 </select>";
    rep += "                 <label for=\"Usr_Pays\">Pays</label>";
    rep += "               </div>";
    rep += "             </div>";
    rep += "</form>";
    rep += "                    </div>";
    rep += "                    <div class=\"modal-footer\">";
    rep += "                        <button class=\"btn waves - effect waves - light modal-close\" type=\"button\" onclick=\"\" name=\"action\">Modifier</a>";
    rep += "                    </div>";
    rep += "                </div>";
	rep += "</div>";
	
	
	

    var repMenu = "";
    repMenu += "<li><a class=\"waves-effect waves-light btn modal-trigger\" href=\"#modal1\"><i class=\"material-icons right\">add</i>Créer événement</a></li>\n";
    repMenu += "                  <li><a href=\"#\"><i class=\"material-icons teal-text\">event</i></a></li>\n";
    repMenu += "                  <li><a class=\"dropdown-button\" data-activates=\"dropdown1\" data-target=\"dropdown1\" href=\"#\"><i class=\"material-icons teal-text\">person_pin</i></a>\n";
	
   repMenu += "<ul id='dropdown1' class='dropdown-content'>";
   repMenu += " <li><a class=\"modal-trigger\" href=\"#modal2\">Profil</a></li>";
   repMenu += "  <li class=\"divider\"></li>";
   repMenu += "  <li><a href=\"javascript:logOff();\">LogOff</a></li>";
   repMenu += " </ul>";

    $('#container').html(rep);
    $('#menu-droite').html(repMenu);
}

var membreVue=function(reponse){
	var action=reponse.action;
	switch(action){
		case "enregistrer" :
		case "enlever" :
        case "modifier":
        case "connexBloque":
			$('#messages').html(reponse.msg);
			setTimeout(function(){ $('#messages').html(""); }, 5000);
            break;
        case "connexOK":
            vueUser(reponse);
            break;
	}
}

