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