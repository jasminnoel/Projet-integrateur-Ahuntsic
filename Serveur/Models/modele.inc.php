<?php
require_once("connexion.inc.php");
class filmsModele{
	private $requete;
	private $params;
	private $connexion;

function __construct($requete=null,$params=null){
		$this->requete=$requete;
		$this->params=$params;
}

function obtenirConnexion(){
	$maConnexion = new Connexion("gator4055.hostgator.com", "jasminno_root", "dbpotloc", "jasminno_dbpotloc");
	$maConnexion->connecter();
	return $maConnexion->getConnexion();
}

function executer(){
		$this->connexion = $this->obtenirConnexion();
		$stmt = $this->connexion->prepare($this->requete);
		$stmt->execute($this->params);
		$this->deconnecter();
		return $stmt;
	}
function deconnecter(){
		unset($this->connexion);
}

function verserFichier($titre){
	$dossier="../pochettes/";
	$nomPochette=sha1($titre.time());
	$pochette="avatar.jpg";
	if($_FILES['pochette']['tmp_name']!==""){
	  //Upload de la photo
	  $tmp = $_FILES['pochette']['tmp_name'];
	  $fichier= $_FILES['pochette']['name'];
	  $extension=strrchr($fichier,'.');
	  move_uploaded_file($tmp,$dossier.$nomPochette.$extension);
	  // Enlever le fichier temporaire chargé
	  @unlink($tmp); //effacer le fichier temporaire
	  $pochette=$nomPochette.$extension;
	}
	return $pochette;
}
function enleverFichier($dossier,$pochette){
	if($pochette!="avatar.jpg"){
		$rmPoc="../$dossier/".$pochette;
		$tabFichiers = glob("../$dossier/*");
		//print_r($tabFichiers);
		// parcourir les fichier
		foreach($tabFichiers as $fichier){
		  if(is_file($fichier) && $fichier==trim($rmPoc)) {
			// enlever le fichier
			unlink($fichier);
			break;
		  }
		}
	}
}
}//fin de la classe


?>
