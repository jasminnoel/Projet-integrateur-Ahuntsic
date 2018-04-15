<?php
	require_once("../includes/modele.inc.php");
	$tabRes=array();
	function enregistrerMembre(){
		global $tabRes;
		$nom = $_POST["nom"];
		$prenom = $_POST["prenom"];
		$age = $_POST["age"];
		$courriel = $_POST["courriel"];
		$username = $_POST["username"];
		$password = $_POST["password"];
		try{
			$requete="INSERT INTO membre VALUES(?,?,?,?,?)";
			$unModele=new filmsModele($requete,array($username,$prenom,$nom,$age,$courriel));
			$stmt=$unModele->executer();
			$tabRes['action']="enregistrer";
			$tabRes['msg']="Film bien enregistre";
		}catch(Exception $e){
		}finally{
			unset($unModele);
		}
	}

	//******************************************************
	//Controleur
	$action=$_POST['action'];
	switch($action){
		case "enregistrer" :
			enregistrerMembre();
		break;
	case "validerConnexion" :
			validerConnexion();
		break;
	}
    echo json_encode($tabRes);
?>