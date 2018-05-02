<?php
	require_once("../Models/modele.inc.php");
	$tabRes=array();
	
function selectInvit(){
	global $tabRes;
	session_start();
	$Usr_ID = $_SESSION["Usr_ID"];
	$Event_ID = $_POST["Event_ID"];
	
	try{
			$reqEvent="SELECT Usr_ID,Usr_Prenom,Usr_Nom,Usr_Photo FROM utilisateurs";
			$tabRes['listeMembres']=array();
				
			$unModele=new filmsModele($reqEvent,array());
			$stmt=$unModele->executer();
			while($ligne=$stmt->fetch(PDO::FETCH_OBJ)){

	$tabRes['listeMembres'][] = $ligne;

      }
    $tabRes['action']="selectInvit";



		}catch(Exception $e){
		}finally{
			unset($unModele);
		}
	
}
		//******************************************************
	//Controleur
	$action=$_POST['action'];
	switch($action){
		case "selectInvit" :
			selectInvit();
		break;

	}
    echo json_encode($tabRes);

?>