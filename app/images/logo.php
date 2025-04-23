<?php

function creerLogo($prenom, $nom) {
    echo '<img src="images/logoDuSite.php?prenom='.$prenom.'&nom='.$nom.'">';
}