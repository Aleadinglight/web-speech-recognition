var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();

recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var app = new Vue({
    el: '#app',
    data: {
        message:"Hello",
    },
    methods: {
        startRecording: function (){
            recognition.start();
            this.message = "Recording";
        }
    }
});

recognition.onresult = function(event) {
    app.message = "received.";
}

recognition.onspeechend = function() {
    app.message = "stop.";
    recognition.stop();
}