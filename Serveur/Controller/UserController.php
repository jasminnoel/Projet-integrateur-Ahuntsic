<?php
	require_once("../Models/modele.inc.php");
	$tabRes=array();


	function enregistrerEvent(){
	session_start();
		global $tabRes;
		$Event_Nom = $_POST["Event_Nom"];
		$Event_Lieu = $_POST["Event_Lieu"];
		$Event_Desc = $_POST["Event_Desc"];
		$Event_Date_Debut = $_POST["Event_Date_Debut"];
		$Event_Time = $_POST["Event_Time"];
		$Usr_ID = $_SESSION["Usr_ID"];


		if($Event_Nom == "" || $Event_Lieu == "" || $Event_Desc == "" || $Event_Date_Debut == ""){

			return false;
		}
		else{
			try{
					$Query="INSERT INTO evenements VALUES(0,?,?,?,?,?,?,?)";
					$unModele=new filmsModele($Query,array($Event_Nom, $Event_Date_Debut, $Event_Lieu, null,$Event_Desc, $Event_Time,$Usr_ID));
					$stmt=$unModele->executer();

										$Query="SELECT MAX(Event_ID) as ID FROM evenements";
					$unModele=new filmsModele($Query,array());
					$stmt=$unModele->executer();
					$ligne=$stmt->fetch(PDO::FETCH_OBJ);
					$Event_ID=$ligne->ID;
					$reqInvit="INSERT INTO invitations VALUES(?,?,?)";
			$unModele=new filmsModele($reqInvit,array($Usr_ID, $Event_ID, 'par'));
			$stmt=$unModele->executer();

					$tabRes['action']="enregistrer";
					$tabRes['msg']="Evenement bien enregistre";
				}catch(Exception $e){
					}finally{
						unset($unModele);
					}



		}



	}



	function LogOff(){
		session_start();
		setcookie ("PHPSESSID", "value", time() - 3600, "/");
		session_destroy();
		session_unset(); 
		session_commit();
	}


	function ModifProfil(){
	session_start();
		global $tabRes;
		$Usr_Prenom = $_POST["Usr_Prenom"];
		$Usr_Nom = $_POST["Usr_Nom"];
		$Usr_DateN = $_POST["Usr_DateN"];
		$Usr_Ville = $_POST["Usr_Ville"];
		$Usr_Password = $_POST["Usr_Password"];
		$Usr_Pays = $_POST["Usr_Pays"];
		$Usr_ID = $_SESSION["Usr_ID"];
		$Usr_Email = $_SESSION["Usr_Email"];
		$Usr_Photo = $_POST["Usr_Photo"];
		$dossier="../../userphotos/";
		if($Usr_Prenom == "" || $Usr_Nom == "" || $Usr_DateN == ""|| $Usr_Ville == ""|| $Usr_Password == "" || $Usr_Pays = ""){

			return false;
		}
		else{
		
				$requette="SELECT Usr_Photo FROM utilisateurs WHERE Usr_ID=?";
				$unModele=new filmsModele($requette,array($Usr_ID));
				$stmt=$unModele->executer();
				$ligne=$stmt->fetch(PDO::FETCH_OBJ);
				$Usr_Photo=$ligne->Usr_Photo;
				if($_FILES['Usr_Photo']['tmp_name']!==""){
				//enlever ancienne pochette
				if($Usr_Photo!="avatar.jpg"){
					$rmPoc='../../userphotos/'.$Usr_Photo;
					$tabFichiers = glob('../../userphotos/*');
					//print_r($tabFichiers);
					// parcourir les fichier
					foreach($tabFichiers as $fichier){
					  if(is_file($fichier) && $fichier==trim($rmPoc)) {
						// enlever le fichier
						unlink($fichier);
						break;
						//
					  }
					}
				}
				$nomPochette=sha1($Usr_Email.time());
				//Upload de la photo
				$tmp = $_FILES['Usr_Photo']['tmp_name'];
				$fichier= $_FILES['Usr_Photo']['name'];
				$extension=strrchr($fichier,'.');
				$Usr_Photo=$nomPochette.$extension;
				@move_uploaded_file($tmp,$dossier.$nomPochette.$extension);
				// Enlever le fichier temporaire chargé
				@unlink($tmp); //effacer le fichier temporaire
				}


					$Query="UPDATE utilisateurs SET Usr_Prenom=?, Usr_Nom=?, Usr_DateN=?, Usr_Ville=?, Usr_Pays=?, Usr_Photo=? WHERE Usr_ID=?";
					$unModele=new filmsModele($Query,array($Usr_Prenom, $Usr_Nom, $Usr_DateN, $Usr_Ville, $Usr_Pays, $Usr_Photo, $Usr_ID));
					$stmt=$unModele->executer();




					$QueryConn="UPDATE connexion SET Usr_Password=? WHERE Usr_Email=?";
					$unModele=new filmsModele($QueryConn,array($Usr_Password, $Usr_Email));
					$stmt=$unModele->executer();

					$tabRes['action']="enregistrer";
					$tabRes['msg']="Profil bien modifié";


		
		
		}



	}




		//******************************************************
	//Controleur
	$action=$_POST['action'];
	switch($action){
		case "enregistrerEvent" :
			enregistrerEvent();
		break;
		case "LogOff" :
			LogOff();
		break;
		case "ModifProfil" :
			ModifProfil();
		break;
	}
    echo json_encode($tabRes);

?>