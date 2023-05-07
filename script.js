'use strict';

const heightNotes = [
    {'height': '1-1', 'frequency': '32,75'},
    {'height': '1-2', 'frequency': '34,67'},
    {'height': '1-3', 'frequency': '36,75'},
    {'height': '1-4', 'frequency': '39'},
    {'height': '1-5', 'frequency': '41,5'},
    {'height': '1-6', 'frequency': '44'},
    {'height': '1-7', 'frequency': '46,5'},
    {'height': '1-8', 'frequency': '49'},
    {'height': '1-9', 'frequency': '52'},
    {'height': '1-10', 'frequency': '55'},
    {'height': '1-11', 'frequency': '58,25'},
    {'height': '1-12', 'frequency': '61,75'},
    {'height': '2-1', 'frequency': '65,5'},
    {'height': '2-2', 'frequency': '69,25'},
    {'height': '2-3', 'frequency': '73,5'},
    {'height': '2-4', 'frequency': '78'},
    {'height': '2-5', 'frequency': '83'},
    {'height': '2-6', 'frequency': '88'},
    {'height': '2-7', 'frequency': '93'},
    {'height': '2-8', 'frequency': '98'},
    {'height': '2-9', 'frequency': '104'},
    {'height': '2-10', 'frequency': '110'},
    {'height': '2-11', 'frequency': '116,5'},
    {'height': '2-12', 'frequency': '123,5'},
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
    {'height': '6-1', 'frequency': '1048'},
    {'height': '6-2', 'frequency': '1108'},
    {'height': '6-3', 'frequency': '1176'},
    {'height': '6-4', 'frequency': '1248'},
    {'height': '6-5', 'frequency': '1320'},
    {'height': '6-6', 'frequency': '1400'},
    {'height': '6-7', 'frequency': '1480'},
    {'height': '6-8', 'frequency': '1568'},
    {'height': '6-9', 'frequency': '1664'},
    {'height': '6-10', 'frequency': '1760'},
    {'height': '6-11', 'frequency': '1864'},
    {'height': '6-12', 'frequency': '1976'},
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
    {'nameNote' : 'A', 'numberNote' : '1', 'id': 'C-natural'},
    {'nameNote' : 'W', 'numberNote' : '2', 'id': 'C-sharp'},
    {'nameNote' : 'S', 'numberNote' : '3', 'id': 'D-natural'},
    {'nameNote' : 'E', 'numberNote' : '4', 'id': 'D-sharp'},
    {'nameNote' : 'D', 'numberNote' : '5', 'id': 'E-natural'},
    {'nameNote' : 'F', 'numberNote' : '6', 'id': 'F-natural'},
    {'nameNote' : 'T', 'numberNote' : '7', 'id': 'F-sharp'},
    {'nameNote' : 'G', 'numberNote' : '8', 'id': 'G-natural'},
    {'nameNote' : 'Y', 'numberNote' : '9', 'id': 'G-sharp'},
    {'nameNote' : 'H', 'numberNote' : '10', 'id': 'A-natural'},
    {'nameNote' : 'U', 'numberNote' : '11', 'id': 'A-sharp'},
    {'nameNote' : 'J', 'numberNote' : '12', 'id': 'B-natural'},
    {'nameNote' : 'K', 'numberNote' : '13', 'id': 'C-octave'}
] 

const myAudioContext = new AudioContext();
function beep(duration, frequency, volume){
    return new Promise((resolve, reject) => {
        duration = duration || 200;
        frequency = frequency || 440;
        volume = volume || 10;
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

var noteKey;
function TurnOffColor(){
    noteKey.classList.remove('natural-key-hover');
    noteKey.classList.add('natural-key');
}
function TurnOnColor(idKey){
    noteKey = document.getElementById(idKey);
    noteKey.classList.remove('natural-key');
    noteKey.classList.add('natural-key-hover');
    setTimeout(TurnOffColor, 200);
}

var downNote = 0;
function PlayNote(note, idKey){
    downNote = 1;
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
    TurnOnColor(idKey);
}
function StopNote(note){
    downNote = 0;
    console.log('stop '+ currentNote);
    currentNote = '';
}
function TypeNote(event) {
    let keyName = event.key.toUpperCase();
    let findValue = keyboardNotes.find(item => item.nameNote == keyName).numberNote;
    currentNote = findValue;
    let sendObject = {'value' : currentNote};
    let idKey = keyboardNotes.find(item => item.nameNote == keyName).id;
    PlayNote(sendObject, idKey);
}
function Glissing(note){
    if(downNote == 1){
        PlayNote(note);
    }
}
function Deglissing(){
    downNote = 0;
}