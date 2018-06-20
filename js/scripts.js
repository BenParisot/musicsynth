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

var lineAll = [];

var melodyPause = [800, 300, 800, 300, 800, 300, 800, 300, 800, 300, 800, 300, 800, 300, 800, 300, 800];
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

function gatherNotesOne() {
	var randomNote = scaleMajor[Math.floor(Math.random()*scaleNaturalMinor.length)];
	lineOne.push(randomNote);
}

function gatherNotesTwo() {
	var randomNote = scaleMajor[Math.floor(Math.random()*scaleNaturalMinor.length)];
	lineTwo.push(randomNote);
}

function gatherNotesThree() {
	var randomNote = scaleMajor[Math.floor(Math.random()*scaleNaturalMinor.length)];
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
			piano.play(melody[i], 3, 2);
			console.log(melody[i]);
				if (--i) {          // If i > 0, keep going
					theLoop(i);       // Call the loop again, and pass it the current value of i
				}
			}, melodyPause.pop());

		})(melody.length-1);
}





// front end
$(document).ready(function() {
	$("#play").click(function(event) {
		event.preventDefault();
		repeat(gatherNotesOne, 5);
		repeat(gatherNotesTwo, 4);
		repeat(gatherNotesThree, 4);
		var lineOneString = lineOne.toString();
		var lineTwoString = lineTwo.toString();
		var lineThreeString = lineThree.toString();
		var lineAll = (lineThreeString + "," + lineTwoString + "," + lineThreeString + "," + lineOneString);
		var fullMelody = lineAll.split(",");
		console.log(fullMelody);
		var number = 1;
		while (number <= 2) {
    setInterval(playMelody(fullMelody)
    number++;
}
		// playMelody(fullMelody);
		// playMelody(lineOne);

		// playMelody(lineAll);



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
