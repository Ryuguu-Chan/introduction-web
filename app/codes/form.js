window.onload = function() {
    let textArea = document.getElementById("messageTextArea");
    let sendButton = document.getElementById("sendButton");

    textArea.onkeyup = function(e) {
        let text = textArea.value;

        if (text.length > 1000) {
            textArea.classList.add("error");
            sendButton.style.display = "none";
        }
        else {
            textArea.classList.remove("error");
            sendButton.style.display = "block";
        }
    }
}