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

					$tabRes['action']="enregistrer";
					$tabRes['msg']="Evenement bien enregistre";
				}catch(Exception $e){
					}finally{
						unset($unModele);
					}



		}



	}








		//******************************************************
	//Controleur
	$action=$_POST['action'];
	switch($action){
		case "enregistrerEvent" :
			enregistrerEvent();
		break;
		
	}
    echo json_encode($tabRes);

?>