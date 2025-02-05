<?php
    include ("images/logo.php");
    include ("includes/math.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="styles/math.css" media="all">
    <title>Ma deuxième page</title>
</head>
<body>
    <h1>Ma deuxième page</h1>
<?php

    // début exercice 9
    creerLogo("prénom", "nom");
    // fin exercice 9

    // début exercice 10
    creerTableDeMultiplication(12, 12);
    creerTableDeAddition(12, 12);
    creerTableDeDivision(12, 12);
    creerTableDePuissance(12, 12);
    // fin exercice 10
?>
</body>
</html>