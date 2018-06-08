// back end logic
Synth instanceof AudioSynth; // true

var testInstance = new AudioSynth;
testInstance instanceof AudioSynth; // true

testInstance === Synth; // true

//instrumets
var piano = Synth.createInstrument('piano');
var acoustic = Synth.createInstrument('acoustic');
var organ = Synth.createInstrument('organ');
var edm = Synth.createInstrument('edm');


//scales
var scaleChromatic = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B']; // (random, atonal: all twelve note
var scaleMajor = ['C', 'D', 'E', 'F', 'G', 'A', 'B']; // (classic, happy)
var scaleHarmonicMinor = ['C', 'C#', 'D#', 'F', 'F#', 'A', 'A#']; // (haunting, creepy)
var scaleMinorPentatonic = ['D', 'E', 'F#', 'A', 'B']; // (blues, rock)
var scaleNaturalMinor = ['C#', 'D', 'E', 'F#', 'G', 'A', 'B']; // (scary, epic)
var scaleMelodicMinorUp = ['C#', 'D', 'E', 'F#', 'G#', 'A#', 'B']; // (wistful, mysterious)
var scaleMelodicMinorDown = ['C#', 'D#', 'E', 'F#', 'G#', 'A', 'B'];  // (sombre, soulful)
var scaleDorian = ['C#', 'D', 'E', 'F#', 'G#', 'A', 'B']; // (cool, jazzy)
var scaleMixolydian = ['C#', 'D#', 'E', 'F#', 'G#', 'A', 'B']; // (progressive, complex)
var scaleAhavaRaba = ['C', 'D#', 'E', 'F#', 'G', 'A', 'B']; // (exotic, unfamiliar)
var scaleMajorPentatonic = ['C#', 'D#', 'F#', 'G#', 'B']; // (country, gleeful)
var scaleDiatonic = ['C#', 'D#', 'F', 'G', 'A', 'B']; // (bizarre, symmetrical)

//melodies

var lineOne = [];
var lineTwo = [];
var lineThree = [];


// function playNotes()  {
// 		var randomNote = scaleNaturalMinor[Math.floor(Math.random()*scaleNaturalMinor.length)];
// 		piano.play(randomNote, 3, 2);
// 		console.log(randomNote);
//
// }
//
// function repeatSlow(func, times) {
// 	 setTimeout(function() {
// 			 func();
// 			 --times && repeat(func, times);
// 	 }, 200);
//
// }

function repeat(func, times) {
			 func();
			 --times && repeat(func, times);

}

function gatherNotes() {
	var randomNote = scaleNaturalMinor[Math.floor(Math.random()*scaleNaturalMinor.length)];
	lineOne.push(randomNote);
	lineTwo.push(randomNote);
	lineThree.push(randomNote);
}

function repeatSlow(func, times) {
	 setTimeout(function() {
			 func();
			 --times && repeat(func, times);
	 }, 200);

}

function playMelody(melody) {
	(function theLoop (i) {
		setTimeout(function () {
			piano.play(melody[i], 3, 1);
			console.log(lineOne[i]);
				if (--i) {          // If i > 0, keep going
					theLoop(i);       // Call the loop again, and pass it the current value of i
				}
			}, 200);
		})(melody.length-1);
}



// front end
$(document).ready(function() {
	$("#play").click(function(event) {
		event.preventDefault();
		repeat(gatherNotes, 5);
		playMelody(lineOne);


	// (function theLoop (i) {
  // 	setTimeout(function () {
	// 		piano.play(lineOne[i], 3, 1);
	// 		console.log(lineOne[i]);
  //   		if (--i) {          // If i > 0, keep going
  //     		theLoop(i);       // Call the loop again, and pass it the current value of i
  //   		}
  // 		}, 200);
	// 	})(lineOne.length-1);

});

});
