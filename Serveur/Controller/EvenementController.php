﻿<?php
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


function affInvitation() {
global $tabRes;
$nbrIvitation = 0;
// $Event_ID = $_POST["Event_ID"];
session_start();
$Usr_ID = $_SESSION["Usr_ID"];

try{
			$reqEvent="	SELECT * 
						FROM evenements
						INNER JOIN Invitations ON evenements.Event_ID = Invitations.Event_ID
						WHERE Status=i AND Usr_ID=?"; // i: invité, p: participant
			$unModele=new filmsModele($reqEvent,array($Usr_ID));
			$stmt=$unModele->executer();
			$ligne=$stmt->fetch(PDO::FETCH_OBJ);

			$nbrIvitation++;
		
    $tabRes['action']="affInvitation";
    $tabRes['objInvit']=$ligne;
    $tabRes['nbrIvitation']=$nbrIvitation;

		}catch(Exception $e){
		}finally{
			unset($unModele);
		}
}

function ajouterContri(){
	global $tabRes;
	session_start();
	$Usr_ID = $_SESSION["Usr_ID"];
	$Event_ID = $_POST["eveID"];
	$nomContri = $_POST["nomContri"];
	$qteContri = $_POST["qteContri"];
	$coutContri = $_POST["coutContri"];

	try{
					$Query="INSERT INTO contributions VALUES(?,?,?,?,?,?,?)";
					$unModele=new filmsModele($Query,array($Usr_ID, $Event_ID, 'general', $nomContri,$coutContri, null,$qteContri));
					$stmt=$unModele->executer();
					$tabRes['nomContri']=$nomContri;
					$tabRes['qteContri']=$qteContri;
					$tabRes['coutContri']=$coutContri;
					$tabRes['action']="addContri";
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
		case "affInvitation" :
			affInvitation();
		break;	
		case "ajouterContri" :
			ajouterContri();
		break;	
	}
    echo json_encode($tabRes);

?>