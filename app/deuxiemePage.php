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
    <link rel="stylesheet" type="text/css" href="styles/form.css" media="all">
    <link rel="icon" type="image/png" href="images/favicon.png">
    <title>Ma deuxième page</title>
</head>
<body>
    <h1>Ma deuxième page</h1>
<?php

    // début exercice 9
    // fin exercice 9

    // début exercice 10
    // fin exercice 10
?>
<!-- début exercice bonus 1 -->
<form action="actions/send.php" method="post">
    <table>
        <tr>
            <th>ton nom</th>
            <td><input type="text" name="nom" required></td>
        </tr>
        <tr>
            <th>ton prénom</th>
            <td><input type="text" name="prenom" required></td>
        </tr>
        <tr>
            <th>ton avi</th>
            <td><input type="text" name="message" required></td>
        </tr>
    </table>
    <input type="submit">
</form>
<!-- fin exercice bonus 1 -->
</body>
</html>