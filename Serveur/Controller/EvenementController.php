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

		$reqEvent="SELECT * FROM contributions inner JOIN utilisateurs ON contributions.Usr_ID=utilisateurs.Usr_ID WHERE Event_ID=?";
			$unModele=new filmsModele($reqEvent,array($Event_ID));
			$stmt=$unModele->executer();
	$tabRes['listeContri']=array();
			while($ligne=$stmt->fetch(PDO::FETCH_OBJ)){

	$tabRes['listeContri'][] = $ligne;

      }
	  	  $reqEvent="SELECT * FROM sondages inner JOIN utilisateurs ON sondages.Usr_ID=utilisateurs.Usr_ID WHERE Event_ID=?";
			$unModele=new filmsModele($reqEvent,array($Event_ID));
			$stmt=$unModele->executer();
	$tabRes['listeSondages']=array();
			while($ligne=$stmt->fetch(PDO::FETCH_OBJ)){

	$tabRes['listeSondages'][] = $ligne;
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
			 $api_key = '56f0c8d40a6948c0feba7ed12f04a7ea';
    $url = 'http://api.openweathermap.org/data/2.5/forecast?id=6077243&units=metric&APPID='.$api_key;
   $jsonstr = file_get_contents($url);
   $jsonobj = json_decode($jsonstr);
   $tabRes['jsonmeteo']=$jsonobj;
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
	$Usr_Photo = $_SESSION["Usr_Photo"];
	//$Cont_ID = $_SESSION["Cont_ID"];
	try{
					$Query="INSERT INTO contributions VALUES(0,?,?,?,?,?,?,?)";
					$unModele=new filmsModele($Query,array($Usr_ID, $Event_ID, 'general', $nomContri,$coutContri, null,$qteContri));
					$stmt=$unModele->executer();
					$tabRes['nomContri']=$nomContri;
					$tabRes['qteContri']=$qteContri;
					$tabRes['coutContri']=$coutContri;
					$tabRes['action']="addContri";
					$tabRes['Usr_Photo']=$Usr_Photo;
					//$tabRes['Cont_ID'] = $Cont_ID;
				}catch(Exception $e){
					}finally{
						unset($unModele);
					}
}

function ajouterSond(){
	global $tabRes;
	session_start();
	$Usr_ID = $_SESSION["Usr_ID"];
	$Event_ID = $_POST["eveID"];
	$option1 = $_POST["option1"];
	$option2 = $_POST["option2"];
	try{
					$Query="INSERT INTO sondages VALUES(?,?,?,?,?,?,?)";
					$unModele=new filmsModele($Query,array(0, $Usr_ID, $Event_ID, $option1, 0,$option2, 0));
					$stmt=$unModele->executer();

					$Query="SELECT MAX(Sond_ID) as ID FROM sondages";
					$unModele=new filmsModele($Query,array());
					$stmt=$unModele->executer();
					$ligne=$stmt->fetch(PDO::FETCH_OBJ);
					
					$tabRes['last_id']=$ligne->ID;
					$tabRes['option1']=$option1;
					$tabRes['option2']=$option2;
					$tabRes['action']="affSondage";
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


//Delete contributions
function DelContribution(){
	global $tabRes;
	session_start();

	$DelContid = $_POST['Cont_ID'];
	$_SESSION["Cont_ID"] = $DelContid;
	$Query="DELETE FROM contributions WHERE Cont_ID=?";
	$unModele=new filmsModele($Query,array($DelContid));
	$stmt=$unModele->executer();

	$tabRes['Cont_ID'] = $DelContid;

}
//ajouter votes
function ajouterVote(){
	global $tabRes;
	$no_option = $_POST['no_option'];
	$Sond_ID = $_POST['Sond_ID'];
	if($no_option == 1){
		$Query="UPDATE sondages SET Sondage_Option1_NbVotes = Sondage_Option1_NbVotes +1 WHERE Sond_ID=?";
	$unModele=new filmsModele($Query,array($Sond_ID));
	$stmt=$unModele->executer();
	
	$Query="SELECT `Sondage_Option1_NbVotes` FROM sondages WHERE Sond_ID=?";
	$unModele=new filmsModele($Query,array($Sond_ID));
	$stmt=$unModele->executer();
	$ligne=$stmt->fetch(PDO::FETCH_OBJ);
	$tabRes['Sond_ID'] = $Sond_ID;
	$tabRes['nb_votes'] = $ligne->Sondage_Option1_NbVotes;
	$tabRes['no_option'] = $no_option;
	}
	
	if($no_option == 2){
		$Query="UPDATE sondages SET Sondage_Option2_NbVotes = Sondage_Option2_NbVotes +1 WHERE Sond_ID=?";
	$unModele=new filmsModele($Query,array($Sond_ID));
	$stmt=$unModele->executer();
	
	$Query="SELECT `Sondage_Option2_NbVotes` FROM sondages WHERE Sond_ID=?";
	$unModele=new filmsModele($Query,array($Sond_ID));
	$stmt=$unModele->executer();
	$ligne=$stmt->fetch(PDO::FETCH_OBJ);
	$tabRes['Sond_ID'] = $Sond_ID;
	$tabRes['nb_votes'] = $ligne->Sondage_Option2_NbVotes;
	$tabRes['no_option'] = $no_option;
	}
	$tabRes['action'] = "affVotes";
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
		case "ajouterSond" :
			ajouterSond();
		break;
		case "DelContribution" :
			DelContribution();
		break;
		case "ajouterVote" :
			ajouterVote();
		break;
	}
    echo json_encode($tabRes);

?>
