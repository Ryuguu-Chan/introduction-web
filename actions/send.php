<?php

    if (
        isset($_POST['nom']) &&
        isset($_POST['prenom']) &&
        isset($_POST['message'])
    ) {
        try {
            $pdo = new PDO("mysql:host=127.0.0.1;dbname=introduction_web_db", "goku", "vegeta");
            $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $sql = "INSERT INTO introduction_web_db.message (senderNickname, senderName, senderMessage) VALUES (:senderNickname, :senderName, :senderMessage)";
            
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(":senderNickname", $_POST['prenom']);
            $stmt->bindParam(":senderName", $_POST['nom']);
            $stmt->bindParam(":senderMessage", $_POST['message']);

            echo "<h1>Vous avez officiellement terminé les exercices!. Veuillez le dire au professeur!</h1>";

        }
        catch (PDOException $e) {
            die("Quelque chose n'a pas tourné ronds: (".$e->getCode().") ".$e->getMessage().". Veuillez avertire votr enseignant");
        }
    }
    else {
        die("Forbidden");
    }