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
        resultMessage:"",
        show:false
    }
});

var app = new Vue({
    el: '#app',
    data: {
        message:"WELCOME",
    },
    methods: {
        startRecording: function (){
            if (result.show){
                result.show=false;
            }
            recognition.start();
            this.message = "RECORDING..";
        }
    }
});

recognition.onresult = function(event) {
    result.resultMessage = event.results[0][0].transcript.toUpperCase();
    result.show=true;
}

recognition.onspeechend = function() {
    app.message = "RECORDING STOPPED.";
    recognition.stop();
}