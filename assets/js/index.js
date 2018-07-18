var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();

recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

if (SpeechRecognition==null){
    result.resultMessage="Sorry, this feature is not currently supporting your browser. Please upgrade it to Chrome 33+.";
    app.isDisabled=true;
    result.show=true;
}
// if transition is inside result, when result toggle there will be no animation
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
        isDisabled:false
    },
    methods: {
        startRecording: function (){
            this.isDisabled=true;
            if (result.show){
                result.show=false;
            }
            try {
                recognition.start();
            }
            catch(err) {
                result.resultMessage="Sorry, this feature is not currently supporting your browser. Please upgrade it to Chrome 33+.";
                app.isDisabled=true;
                result.show=true;
            }
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
    app.isDisabled = false;
    recognition.stop();
}