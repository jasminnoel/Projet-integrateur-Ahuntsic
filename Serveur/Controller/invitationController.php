<?php
	require_once("../Models/modele.inc.php");
	$tabRes=array();
	
function selectInvit(){
	global $tabRes;
	$Event_ID = $_POST["Event_ID"];
	
	try{
			$reqMembres="SELECT utilisateurs.Usr_ID,utilisateurs.Usr_Prenom,utilisateurs.Usr_Nom,utilisateurs.Usr_Photo FROM utilisateurs WHERE NOT EXISTS (SELECT invitations.Usr_ID FROM invitations WHERE invitations.Usr_ID=utilisateurs.Usr_ID AND invitations.Event_ID=?)";
			$tabRes['listeMembres']=array();
				
			$unModele=new filmsModele($reqMembres,array($Event_ID));
			$stmt=$unModele->executer();
			while($ligne=$stmt->fetch(PDO::FETCH_OBJ)) {
	$tabRes['listeMembres'][] = $ligne;
      }
			$reqInv="SELECT utilisateurs.Usr_ID,utilisateurs.Usr_Prenom,utilisateurs.Usr_Nom,utilisateurs.Usr_Photo FROM utilisateurs WHERE EXISTS (SELECT invitations.Usr_ID FROM invitations WHERE invitations.Usr_ID=utilisateurs.Usr_ID AND invitations.Event_ID=?)";
			$tabRes['listeinvites']=array();
				
			$unModele=new filmsModele($reqInv,array($Event_ID));
			$stmt=$unModele->executer();
			while($ligne=$stmt->fetch(PDO::FETCH_OBJ)) {
	$tabRes['listeinvites'][] = $ligne;
      }
	$tabRes['Event_ID']=$Event_ID;
    $tabRes['action']="selectInvit";



		}catch(Exception $e){
		}finally{
			unset($unModele);
		}
	
}
function sendInvit(){
	global $tabRes;
	$Event_ID = $_POST["Event_ID"];
	$Usr_ID = $_POST["Usr_ID"];
		try{
			$reqInvit="INSERT INTO invitations VALUES(?,?,?)";
			$unModele=new filmsModele($reqInvit,array($Usr_ID, $Event_ID, 'inv'));
					$stmt=$unModele->executer();
		$tabRes['action']="sendInvit";
		$tabRes['Usr_ID']=$Usr_ID;

		$req="SELECT Usr_Prenom,Usr_Photo FROM utilisateurs WHERE Usr_ID=?";
				
			$unModele=new filmsModele($req,array($Usr_ID));
			$stmt=$unModele->executer();
		$ligne=$stmt->fetch(PDO::FETCH_OBJ); 
		$tabRes['Usr_Photo'] = $ligne->Usr_Photo;
		$tabRes['Usr_Prenom'] = $ligne->Usr_Prenom;


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
		case "sendInvit" :
			sendInvit();
		break;
	}
    echo json_encode($tabRes);

?>