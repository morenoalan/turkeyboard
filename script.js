"use strict";

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
            oscillatorNode.type= "square";
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

const keys = document.getElementsByClassName('key');

document.addEventListener('keydown', PlayNote);
document.addEventListener('keyup', StopNote);
function PlayNote(event){
    var keyName = event.key.toUpperCase();
    console.log('play ' + keyName);
    if(keyName == 'A'){
        beep(500, 262, 10);
    }
}
function StopNote(note){
    console.log('stop '+note.id);
}

function TypeNote(note) {
    console.log('play '+note.id);
}