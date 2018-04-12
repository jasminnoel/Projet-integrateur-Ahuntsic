<?php
	require_once("../Models/modele.inc.php");
	$tabRes=array();
	function enregistrerMembre(){
		global $tabRes;
		$usr_nom = $_POST["usr_nom"];
		$usr_prenom = $_POST["usr_prenom"];
		$usr_email = $_POST["usr_email"];
		$usr_password = $_POST["usr_password"];
    $usr_dateN = $_POST["usr_dateN"];
    $usr_ville = $_POST["usr_ville"];
    $usr_pays = $_POST["usr_pays"];
    
    
		try{
    $Verification="SELECT * FROM connexion WHERE Usr_Email=?";
			$unModele=new filmsModele($requette,array($usr_email));
			$stmt=$unModele->executer();
    if($ligne=$stmt->fetch(PDO::FETCH_OBJ)){
    
     $tabRes['action']="enregistrer";
			$tabRes['msg']="Membre deja existant";
 
    }
    else{
     //ajout dans la connexion
    $requete="INSERT INTO connexion VALUES(?,?,?)";
			$unModele=new filmsModele($requete,array($usr_email,$usr_password,'actif'));
			$stmt=$unModele->executer();
    
 
    
    
    //Ajout du membre
			$requete="INSERT INTO utilisateurs VALUES(?,?,0,?,?,?,?)";
			$unModele=new filmsModele($requete,array($usr_dateN,$usr_email,$usr_nom,$usr_pays,$usr_prenom,$usr_ville));
			$stmt=$unModele->executer();
			$tabRes['action']="enregistrer";
			$tabRes['msg']="Membre bien enregistre";
    }
    
  
		}catch(Exception $e){
		}finally{
			unset($unModele);
		}
	}

	//******************************************************
	//Contr?leur
	$action=$_POST['action'];
	switch($action){
		case "enregistrer" :
			enregistrerMembre();
		break;
	}
    echo json_encode($tabRes);
?>