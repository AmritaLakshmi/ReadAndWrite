const btn = document.getElementById("btn");
const result = document.getElementById("result");
const copyBtn = document.getElementById("copyBtn"); // Assuming you have a copy button

const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();

recognition.onstart = function() {
    console.log("You can speak now");
    btn.disabled = true; // Disable the button while recognizing
};

recognition.onresult = function(event) {
    const text = event.results[0][0].transcript;
    console.log(text);
    result.innerHTML = text;
};

recognition.onerror = function(event) {
    console.error("Error occurred in recognition:", event.error);
    btn.disabled = false; // Re-enable the button on error
};

recognition.onend = function() {
    console.log("Speech recognition ended.");
    btn.disabled = false; // Re-enable the button when recognition ends
};

btn.addEventListener("click", function() {
    recognition.start();
});

copyBtn.addEventListener("click", function() {
    copyToClipboard(result.innerText);
});

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        console.log('Text copied to clipboard');
        alert("Copied the text!");
    }).catch(function(err) {
        console.error('Error copying text: ', err);
    });
}
