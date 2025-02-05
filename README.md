done for a special course given to future dev students

## Exercice 1
Aller dans le fichier `index.html` et mettez un titre comme ici
```
<!-- début exercice 1 -->
<h1>Mon site internet</h1>
<!-- fin exercice 1 -->
```
## Exercice 2
Aller dans le fichier `index.html` et mettez un titre comme ici
```
<!-- début exercice 2 -->
<p>[votre introduction va ici]</p>
<!-- fin exercice 2 -->
```
## Exercice 3
Insérez l'image de votre choix comme ici
```
<!-- début exercice 3 -->
<img src="./placeholder.png">
<!-- fin exercice 3 -->
```
## Exercice 4
Créez un bouton et cliquez dessus pour voir la magie qui se produit
```
<!-- début exercice 4 -->
<button id="bouton">Appuis sur moi</button>
<!-- fin exercice 4 -->
```
## Exercice 5
Créez une zone de texte afin de pouvor y insérer du texte et appuyez sur le bouton précédemment crée dans l'exercice 4
```
<!-- début exercice 5 -->
<input type="text" id="textbox">
<!-- fin exercice 5 -->
```
## Exercice 6
Allez dans le fichier `codes/main.js` et faites aller le serpent comme ici.
```
<!-- début exercice 6 -->
<a href="deuxiemePage.php">ma deuxième page</a>
<!-- fin exercice 6 -->
```
## Exercice 7
Allez faire de même pour le chat dans le fichier `codes/main.js`
```
// début exercice 7
Serpent.viens();
// fin exercice 7
```
## Exercice 8
Allez faire de même pour le chat dans le fichier `codes/main.js`
```
// début exercice 8
chat.viens();
chat.couleur("rouge");
// fin exercice 8
```
Vous pouvez choisir la couleur parmi les suivants
<ul>
<li>rouge</li>
<li>bleu</li>
<li>rose</li>
<li>orange</li>
</ul>
tout autre couleur sera définie en noir

## Exercice 9
Allez dans le fichier `deuxiemePage.php` et faites le logo de votre site en ajoutant le contenu suivant
```
// début exercice 9
creerLogo("prénom", "nom");
// fin exercice 9
```

## Exercice 10
Générez plusieur tableau d'opération mathématique de la manière suivante
```
// début exercice 10
creerTableDeMultiplication(12, 12);
creerTableDeAddition(12, 12);
creerTableDeDivision(12, 12);
creerTableDePuissance(12, 12);
// fin exercice 10
```

## Exercice Bonus 1
Vous allez maintenant écrire ce qu vous en pensez de ce cours en faisant d'abord apparaître le champ de text en ajoutant le contenu suivant
```
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
            <td><textfield name="message" required></textfield></td>
        </tr>
    </table>
    <input type="submit">
</form>
<!-- fin exercice bonus 1 -->
```
Entrez maintenant un message et appuyez sur le boutton "envoyer". Votre message sera stocké dans la base de donnée interne de l'activité