window.onload = function name() {
    let bouton = document.getElementById('bouton');

    bouton.onclick = function() {

        let textbox = document.getElementById('textbox');

        if (textbox == null) {
            alert("Je vies 🎶");
        }
        else {
            alert(textbox.value);
        }
    }
}