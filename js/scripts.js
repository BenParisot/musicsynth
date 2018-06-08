// back end logic
Synth instanceof AudioSynth; // true

var testInstance = new AudioSynth;
testInstance instanceof AudioSynth; // true

testInstance === Synth; // true

var piano = Synth.createInstrument('piano');

var randomNotes = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];


function playNotes()  {
		var randomNote = randomNotes[Math.floor(Math.random()*randomNotes.length)];
		piano.play(randomNote, 4, 1);
		console.log(randomNote);

}

function playWait() {
	setTimeout(playNotes, 1000);
}
//
function repeat(func, times) {
   func();
   --times && repeat(func, times);
}




// front end
$(document).ready(function() {
	$("#play").click(function(event) {
		event.preventDefault();
		repeat(playWait, 5);
		// playWait();


	});



});
