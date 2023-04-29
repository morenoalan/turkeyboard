"use strict";

const keys = document.getElementsByClassName('key');

document.addEventListener('keydown', PlayNote);
document.addEventListener('keyup', StopNote);
function PlayNote(event){
    var keyName = event.key;
    console.log('play ' + keyName);
}
function StopNote(){
    console.log('stop');
}

function TypeNote(note) {
    console.log(note);
}

var buttons = document.getElementsByTagName('button');
console.log(buttons);

buttons[0].onclick = TypeNote('4-1');
buttons[0].onmouseout = StopNote();

buttons.addEventListener('click', function onEvent(event){
    console.log('clicou');
});
