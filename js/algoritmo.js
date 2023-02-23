function verificar(){

    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
    var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
    var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
    
    var recognition = new SpeechRecognition(); //<-- Reconocimiento de voz

    recognition.continuous = false;
    recognition.lang = 'es-ES';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onspeechend = function() {
        recognition.stop();
      }
      
      recognition.onresult = function(event) {
        let palabra = event.results[0][0].transcript;
        console.log(palabra);  
        const array = ["Ian", "Marcos", "Fran"];
        if(array.includes(palabra)){
            alert("Estar en la lista");
        }

        else{
            alert("No esta en la lista");
        }
    }
}

// const array = ["Ian"];
// if(array.includes("Ian")){
//     alert("Estar en la lista");
// }
