<?php

    header('Content-Type: image/png');

    if (isset($_GET['prenom']) && isset($_GET['nom'])) {
        $prenom = $_GET['prenom'];
        $nom = $_GET['nom'];

        $imageWidth = 500;
        $imageHeight = 200;

        $xPos = 0;
        $yPos = 20;

        $siteByText = "Le site internet de";
        $siteAuthorText = $prenom." ".$nom;

        $tailleFont = 50;

        $tailleText = strlen($siteAuthorText) * $tailleFont;

        if ($tailleText > ($imageWidth - (50 + $xPos))) {
            $overshooting = $tailleText - $imageWidth - (50 + $xPos);
            $imageWidth += $overshooting;
        }

        $out = @imagecreate($imageWidth, $imageHeight) or die ("il y a eu un problème lors de la création de l'image. Veuillez demander de l'aide à votre enseignant!");

        $backgroundColor = imagecolorallocate($out, 0, 57, 170);
        $foregroundColorFirstText = imagecolorallocate($out, 255, 255, 255);

        imagefttext($out, 20, 0, 50 + $xPos, 50 + $yPos, $foregroundColorFirstText, "../assets/fonts/free sans/FreeSans.otf", "Le site internet de");
        imagefttext($out, $tailleFont, 0, 50 + $xPos, 115 + $yPos, $foregroundColorFirstText, "../assets/fonts/free sans/FreeSans.otf", $siteAuthorText);

        imagepng($out);
        imagedestroy($out);
    }