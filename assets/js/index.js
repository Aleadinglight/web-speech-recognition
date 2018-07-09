var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();

recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var result = new Vue({
    el:'#result',
    data: {
        message:"Nothing here"
    }
});

var app = new Vue({
    el: '#app',
    data: {
        message:"WELCOME",
    },
    methods: {
        startRecording: function (){
            recognition.start();
            this.message = "RECORDING..";
        }
    }
});

recognition.onresult = function(event) {
    app.message = event.results[0][0].transcript.toUpperCase();
    result.message = event.results[0][0].transcript.toUpperCase();
}

recognition.onspeechend = function() {
    app.message = "RECORDING STOPPED.";
    recognition.stop();
}