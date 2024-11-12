window.onload = function name() {
    let bouton = document.getElementById('bouton');
    let textbox = document.getElementById('textbox');

    if (textbox != null) {
        textbox.placeholder = "ton texte ici";
    }

    bouton.onclick = function() {

        if (textbox == null) {
            alert("Je vies 🎶");
        }
        else {
            alert(textbox.value);
        }
    }
}

// début exercice 6
Serpent.viens();
// fin exercice 6

// début exercice 7
chat.viens();
// fin exercice 7