<?php

$host = "localhost"; 
$user = "id20448316_admin"; 
$password = "[!W0qDtfjTYBa<y]v"; 
$dbname = "id20448316_formulaire"; 

// Création de la connexion
$conn = mysqli_connect($host, $user, $password, $dbname);

// Vérification de la connexion
if (!$conn) {
    die("La connexion à la base de données a échoué : " . mysqli_connect_error());
}
echo "Connexion à la base de données réussie";

?>
