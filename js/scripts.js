// back end logic
Synth instanceof AudioSynth; // true

var testInstance = new AudioSynth;
testInstance instanceof AudioSynth; // true

testInstance === Synth; // true

var piano = Synth.createInstrument('piano');

var randomNotes = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];


function playNotes()  {
		var randomNote = randomNotes[Math.floor(Math.random()*randomNotes.length)];
		piano.play(randomNote, 4);
		console.log(randomNote);

}

function repeat(func, times) {
	 setTimeout(function() {
			 func();
			 --times && repeat(func, times);
	 }, 1000);

}





// front end
$(document).ready(function() {
	$("#play").click(function(event) {
		event.preventDefault();
		repeat(playNotes, 5);

	});



});
