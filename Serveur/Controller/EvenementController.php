<?php
	require_once("../Models/modele.inc.php");
	$tabRes=array();

function affEvenement() {
global $tabRes;
session_start();
$Event_ID = $_POST["Event_ID"];
$_SESSION["Event_ID"] = $Event_ID;
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
$tabRes['listeinvit'] = array();
$reqEvent="SELECT invitations.Invit_Statut,utilisateurs.Usr_Photo,utilisateurs.Usr_Prenom FROM invitations inner JOIN utilisateurs ON invitations.Usr_ID=utilisateurs.Usr_ID WHERE invitations.Event_ID=?";
			$unModele=new filmsModele($reqEvent,array($Event_ID));
			$stmt=$unModele->executer();
			while($ligne=$stmt->fetch(PDO::FETCH_OBJ)){

	$tabRes['listeinvit'][] = $ligne;

      }

	//affichage des messages chat
					$reqEvent="SELECT * FROM messages inner Join utilisateurs ON messages.Usr_ID=utilisateurs.Usr_ID WHERE Event_ID=? ORDER BY Mess_Date DESC";
						$unModele=new filmsModele($reqEvent,array($Event_ID));
						$stmt=$unModele->executer();
				$tabRes['ListMessages']=array();
						while($ligne=$stmt->fetch(PDO::FETCH_OBJ)){

				$tabRes['ListMessages'][] = $ligne;

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
						WHERE Status=i AND Usr_ID=?"; // inv: invité, par: participant
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

function Add_Messages_Controller(){
	global $tabRes;
	session_start();
	$Usr_ID = $_SESSION["Usr_ID"];
	$Event_ID = $_SESSION["Event_ID"];
	$Mess_Contenu = $_POST["Mess_Contenu"];
	$Mess_Date = date("Y-m-d");

	$Query="INSERT INTO messages VALUES(?,0,?,?,?)";
	$unModele=new filmsModele($Query,array($Usr_ID, $Event_ID,$Mess_Contenu, $Mess_Date));
	$stmt=$unModele->executer();

	$reqEvent="SELECT * FROM messages inner Join utilisateurs ON messages.Usr_ID=utilisateurs.Usr_ID WHERE Event_ID=? ORDER BY Mess_Date DESC";
		$unModele=new filmsModele($reqEvent,array($Event_ID));
		$stmt=$unModele->executer();
$tabRes['ListMessages']=array();
		while($ligne=$stmt->fetch(PDO::FETCH_OBJ)){

$tabRes['ListMessages'][] = $ligne;

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
		case "AjoutMessage" :
			Add_Messages_Controller();
		break;
	}
    echo json_encode($tabRes);

?>
