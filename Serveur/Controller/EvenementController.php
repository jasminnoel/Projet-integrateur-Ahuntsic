<?php
	require_once("../Models/modele.inc.php");
	$tabRes=array();

function affEvenement() {
global $tabRes;
$Event_ID = $_POST["Event_ID"];
session_start();
$Usr_ID = $_SESSION["Usr_ID"];

try{
			$reqEvent="SELECT * FROM evenements WHERE Event_ID=?";
			$unModele=new filmsModele($reqEvent,array($Event_ID));
			$stmt=$unModele->executer();
			$ligne=$stmt->fetch(PDO::FETCH_OBJ);
		
    $tabRes['action']="affEvenement";
    $tabRes['objEve']=$ligne;

		$reqEvent="SELECT * FROM contributions WHERE Event_ID=?";
			$unModele=new filmsModele($reqEvent,array($Event_ID));
			$stmt=$unModele->executer();
	$tabRes['listeContri']=array();
			while($ligne=$stmt->fetch(PDO::FETCH_OBJ)){
	$tabRes['listeContri'][] = $ligne;		
			}

		}catch(Exception $e){
		}finally{
			unset($unModele);
		}
}


		//******************************************************
	//Controleur
	$action=$_POST['action'];
	switch($action){
		case "affEvenement" :
			affEvenement();
		break;	
	}
    echo json_encode($tabRes);

?>