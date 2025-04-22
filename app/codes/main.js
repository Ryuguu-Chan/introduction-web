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

// début exercice 7
// fin exercice 7

// début exercice 8
// fin exercice 8