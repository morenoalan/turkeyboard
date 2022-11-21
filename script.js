const keys = document.getElementsByClassName('key');

document.addEventListener('keydown', PlayNote);
document.addEventListener('keyup', StopNote);
function PlayNote(){
    console.log('play');
}
function StopNote(){
    console.log('stop');
}