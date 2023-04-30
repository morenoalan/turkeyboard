"use strict";

const keys = document.getElementsByClassName('key');

document.addEventListener('keydown', PlayNote);
document.addEventListener('keyup', StopNote);
function PlayNote(event){
    var keyName = event.key;
    console.log('play ' + keyName);
}
function StopNote(note){
    console.log('stop '+note.id);
}

function TypeNote(note) {
    console.log('play '+note.id);
}