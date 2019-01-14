//using DOM event handlers
function checkUsername() {
    var elMsg = document.getElementById('feedback');
    if (this.value.length < 5) {
        elMsg.textContent = 'Username must be higher then 5 characters!';
    } else {
        elMsg.textContent = '';
    }
}

var elUsername = document.getElementById('username');
elUsername.onblur = checkUsername;

//Using event listeners
function checkUsername2() {
    var elMsg = document.getElementById('feedback2');
    if (this.value.length > 10) {
        elMsg.textContent = 'Username must be shorter then 10 characters!';
    } else {
        elMsg.textContent = '';
    }
}

var elUsername2 = document.getElementById('username2');
elUsername2.addEventListener('blur', checkUsername2, false);

//using parameters with event listeners
var elUsername3 = document.getElementById('username3');
var elMsg3= document.getElementById('feedback3');

function checkUsername3(minLength) {
    if (elUsername3.value.length < 6) {
        elMsg3.textContent = 'Username must be higher then 6 characters!'
    } else {
        elMsg3.textContent = '';
    }
}

elUsername3.addEventListener('blur', function() {
    checkUsername3(6);
}, false);

//using event delegation
function getTarget(e) {
    if(!e) {
        e = window.event;
    }
    return e.target || e.srcElement;
}

function itemDone(e) {
    var target, elParent, elGrandparent;
    target = getTarget(e);
    elParent = target.parentNode;
    elGrandparent = target.parentNode.parentNode;
    elGrandparent.removeChild(elParent);
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
    
}

var el = document.getElementById('shoppingList');
if (el.addEventListener) {
    el.addEventListener('click', function(e) {
        itemDone(e);
    }, false); 
} else {
    el.attachEvent('onclick', function(e) {
        itemDone(e);
    });
}

//LOAD
function setup() {
    var textInput;
    textInput = document.getElementById('username4');
    textInput.focus();
}

window.addEventListener('load', setup, false);

//FOCUS & BLUR
function checkUsername5() {
    var username = el5.value;
    if (username.length < 5) {
        elMsg5.className = 'warning';
        elMsg5.textContent = 'Not long enough, yet...'; 
    } else {
        elMsg5.textContent = '';
    }
}

function tipUsername() {
    elMsg5.className = 'tip';
    elMsg5.textContent = 'Username must be at least 5 characters';
}

var el5 = document.getElementById('username5');
var elMsg5 = document.getElementById('feedback5');

el5.addEventListener('focus', tipUsername, false);
el5.addEventListener('blur', checkUsername5, false);

//CLICK
/*var msg6 = '<div class=\"header\"><a id=\"close\" href="#">close X</a></div>';
msg6 += '<div><h2>System maintance</h2>';
msg6 += 'Our servers are being updated between 3 to 4 a.m.';
msg6 += 'During this time, there may be minor disruptions to service</div>';

var elNote = document.createElement('div');
elNote.setAttribute('id', 'note');
elNote.innerHTML = msg6;
document.body.appendChild(elNote);

function dismissNote() {
    document.body.removeChild(elNote);
}

var elClose = document.getElementById('close');
elClose.addEventListener('click', dismissNote, false);*/