

var membreVue=function(reponse){
	var action=reponse.action;
	switch(action){
		case "enregistrer" :
		case "enlever" :
        case "modifier":
        case "connexOK":
        case "connexBloque":
			$('#messages').html(reponse.msg);
			setTimeout(function(){ $('#messages').html(""); }, 5000);
		break;
	}
}
