function speakText() {
    const text = document.getElementById('textInput').value;

    
    const speech = new SpeechSynthesisUtterance(text);

    
    speech.lang = 'en-US';  
    speech.pitch = 1;      
    speech.rate = 1;        

    window.speechSynthesis.speak(speech);
}
