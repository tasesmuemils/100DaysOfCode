/*Created by Emils Bisenieks from Wes Bos JS30 turorials
I will comment this out as many as possible just to note things down and just for better situation uderstanding*/

function playSound(e) {
    //Collects audio and key, with specific key code. 
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; //if no audio, stop function
    audio.currentTime = 0; //rewind audio to start, because audio lenght is about 3 seconds, so it will not allow play it from begining if it is already playing
    audio.play(); //plays audio
    key.classList.add('playing'); //Adds extra class
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return; //if propertyName is something else, function stops
    this.classList.remove('playing'); //removes added class 
}

const keys = document.querySelectorAll('.key'); //selects all keys
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); //when transition on element ends (transition: all 0.07s), it triggers a functions, which removes the class

window.addEventListener('keydown', playSound);
