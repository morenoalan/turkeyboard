'use strict';

const heightNotes = [
    {'height': '1-1', 'frequency': ''},
    {'height': '1-2', 'frequency': ''},
    {'height': '1-3', 'frequency': ''},
    {'height': '1-4', 'frequency': ''},
    {'height': '1-5', 'frequency': ''},
    {'height': '1-6', 'frequency': ''},
    {'height': '1-7', 'frequency': ''},
    {'height': '1-8', 'frequency': ''},
    {'height': '1-9', 'frequency': ''},
    {'height': '1-10', 'frequency': ''},
    {'height': '1-11', 'frequency': ''},
    {'height': '1-12', 'frequency': ''},
    {'height': '2-1', 'frequency': ''},
    {'height': '2-2', 'frequency': ''},
    {'height': '2-3', 'frequency': ''},
    {'height': '2-4', 'frequency': ''},
    {'height': '2-5', 'frequency': ''},
    {'height': '2-6', 'frequency': ''},
    {'height': '2-7', 'frequency': ''},
    {'height': '2-8', 'frequency': ''},
    {'height': '2-9', 'frequency': ''},
    {'height': '2-10', 'frequency': ''},
    {'height': '2-11', 'frequency': ''},
    {'height': '2-12', 'frequency': ''},
    {'height': '3-1', 'frequency': '131'},
    {'height': '3-2', 'frequency': '138,5'},
    {'height': '3-3', 'frequency': '147'},
    {'height': '3-4', 'frequency': '156'},
    {'height': '3-5', 'frequency': '165'},
    {'height': '3-6', 'frequency': '175'},
    {'height': '3-7', 'frequency': '185'},
    {'height': '3-8', 'frequency': '196'},
    {'height': '3-9', 'frequency': '208'},
    {'height': '3-10', 'frequency': '220'},
    {'height': '3-11', 'frequency': '233'},
    {'height': '3-12', 'frequency': '247'},
    {'height': '4-1', 'frequency': '262'},
    {'height': '4-2', 'frequency': '277'},
    {'height': '4-3', 'frequency': '294'},
    {'height': '4-4', 'frequency': '312'},
    {'height': '4-5', 'frequency': '330'},
    {'height': '4-6', 'frequency': '350'},
    {'height': '4-7', 'frequency': '370'},
    {'height': '4-8', 'frequency': '392'},
    {'height': '4-9', 'frequency': '416'},
    {'height': '4-10', 'frequency': '440'},
    {'height': '4-11', 'frequency': '466'},
    {'height': '4-12', 'frequency': '494'},
    {'height': '5-1', 'frequency': '524'},
    {'height': '5-2', 'frequency': '554'},
    {'height': '5-3', 'frequency': '588'},
    {'height': '5-4', 'frequency': '624'},
    {'height': '5-5', 'frequency': '660'},
    {'height': '5-6', 'frequency': '700'},
    {'height': '5-7', 'frequency': '740'},
    {'height': '5-8', 'frequency': '784'},
    {'height': '5-9', 'frequency': '832'},
    {'height': '5-10', 'frequency': '880'},
    {'height': '5-11', 'frequency': '932'},
    {'height': '5-12', 'frequency': '988'},
    {'height': '6-1', 'frequency': ''},
    {'height': '6-2', 'frequency': ''},
    {'height': '6-3', 'frequency': ''},
    {'height': '6-4', 'frequency': ''},
    {'height': '6-5', 'frequency': ''},
    {'height': '6-6', 'frequency': ''},
    {'height': '6-7', 'frequency': ''},
    {'height': '6-8', 'frequency': ''},
    {'height': '6-9', 'frequency': ''},
    {'height': '6-10', 'frequency': ''},
    {'height': '6-11', 'frequency': ''},
    {'height': '6-12', 'frequency': ''},
    {'height': '7-1', 'frequency': ''},
    {'height': '7-2', 'frequency': ''},
    {'height': '7-3', 'frequency': ''},
    {'height': '7-4', 'frequency': ''},
    {'height': '7-5', 'frequency': ''},
    {'height': '7-6', 'frequency': ''},
    {'height': '7-7', 'frequency': ''},
    {'height': '7-8', 'frequency': ''},
    {'height': '7-9', 'frequency': ''},
    {'height': '7-10', 'frequency': ''},
    {'height': '7-11', 'frequency': ''},
    {'height': '7-12', 'frequency': ''}
];

const keyboardNotes = [
    {'nameNote' : 'A', 'numberNote' : '1'},
    {'nameNote' : 'W', 'numberNote' : '2'},
    {'nameNote' : 'S', 'numberNote' : '3'},
    {'nameNote' : 'E', 'numberNote' : '4'},
    {'nameNote' : 'D', 'numberNote' : '5'},
    {'nameNote' : 'F', 'numberNote' : '6'},
    {'nameNote' : 'T', 'numberNote' : '7'},
    {'nameNote' : 'G', 'numberNote' : '8'},
    {'nameNote' : 'Y', 'numberNote' : '9'},
    {'nameNote' : 'H', 'numberNote' : '10'},
    {'nameNote' : 'U', 'numberNote' : '11'},
    {'nameNote' : 'J', 'numberNote' : '12'},
    {'nameNote' : 'K', 'numberNote' : '13'}
] 

const myAudioContext = new AudioContext();
function beep(duration, frequency, volume){
    return new Promise((resolve, reject) => {
        duration = duration || 200;
        frequency = frequency || 440;
        volume = volume || 100;
        try{
            let oscillatorNode = myAudioContext.createOscillator();
            let gainNode = myAudioContext.createGain();
            oscillatorNode.connect(gainNode);

            // Set the oscillator frequency in hertz
            oscillatorNode.frequency.value = frequency;

            // Set the type of oscillator
            oscillatorNode.type= 'square';
            gainNode.connect(myAudioContext.destination);

            // Set the gain to the volume
            gainNode.gain.value = volume * 0.01;

            // Start audio with the desired duration
            oscillatorNode.start(myAudioContext.currentTime);
            oscillatorNode.stop(myAudioContext.currentTime + duration * 0.001);

            // Resolve the promise when the sound is finished
            oscillatorNode.onended = () => {
                resolve();
            };
        }catch(error){
            reject(error);
        }
    });
}

var octave = 4;
var currentNote = '';

const keys = document.getElementsByClassName('key');

document.addEventListener('keydown', TypeNote);
document.addEventListener('keyup', StopNote);

function PlayNote(note){
    currentNote = note.value;
    let currentOctave = octave;
    if(currentNote == '13'){
        currentOctave += 1;
        currentNote = '1';
    }
    let octaveAndNote = currentOctave + '-' + currentNote;
    console.log(octave + '-' + currentNote);
    let playFrequency = heightNotes.find(item => item.height == octaveAndNote).frequency;

    beep(200, playFrequency, 10);
}
function StopNote(note){
    console.log('stop '+ currentNote);
    currentNote = '';
}

function TypeNote(event) {
    let keyName = event.key.toUpperCase();
    let findValue = keyboardNotes.find(item => item.nameNote == keyName).numberNote;
    currentNote = findValue;
    let sendObject = {'value' : currentNote};
    PlayNote(sendObject);
}