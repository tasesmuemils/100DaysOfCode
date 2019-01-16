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

//DETERMING POSITION
var sx = document.getElementById('sx');
var sy = document.getElementById('sy');
var px = document.getElementById('px');
var py = document.getElementById('py');
var cx = document.getElementById('cx');
var cy = document.getElementById('cy');

function showPosition(event) {
    sx.value = event.screenX;
    sy.value = event.screenY;
    px.value = event.pageX;
    py.value = event.pageY;
    cx.value = event.clientX;
    cy.value = event.clientX;
}

var elPosition = document.getElementById('body');
elPosition.addEventListener('mousemove', showPosition, false);

//WHICH KEY WAS PRESSED
var elKey;

function charCount(e) {
    var textEntered, charDisplay, counter, lastKey;
    textEntered = document.getElementById('message').value;
    charDisplay = document.getElementById('charactersLeft');
    counter = (180 - (textEntered.length));
    charDisplay.textContent = counter;

    lastKey = document.getElementById('lastkey');
    lastKey.textContent = 'Last key in ASCII code:' + e.keyCode;
}

var elWhichKey = document.getElementById('message');
elWhichKey.addEventListener('keypress', charCount, false);

//USING FORM EVENTS
var elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint;
elForm = document.getElementById('formSignup');
elSelectPackage = document.getElementById('package');
elPackageHint = document.getElementById('packageHint');
elTerms = document.getElementById('terms');
elTermsHint = document.getElementById('termsHint');

function packageHint() {
    var package = this.options[this.selectedIndex].value;
    if (package === 'monthly') {
        elPackageHint.textContent = 'Save $10 if you pay for 1 year!';
    } else {
        elPackageHint.textContent = 'Wise choice';
    }
}

function checkTerms(event) {
    if (!elTerms.checked) {
        elTermsHint.textContent = 'You must agree with terms.';
        event.preventDefault();
    }
}

elSelectPackage.addEventListener('change', packageHint, false);
elForm.addEventListener('submit', checkTerms, false);

//USING MUTATION EVENTS
var elList, addLink, newEl, newText, counter2, listItems;

elList = document.getElementById('list');
addLink = list.querySelector('a');
counter2 = document.getElementById('counter2');

function addItem(e) {
    e.preventDefault();
    newEl = document.createElement('li');
    newText = document.createTextNode('New list item');
    newEl.appendChild(newText);
    elList.appendChild(newEl);
}

function updateCount() {
    listItems = list.getElementsByTagName('li').length;
    counter2.textContent = listItems;
}

addLink.addEventListener('click', addItem, false);
elList.addEventListener('DOMNodeInserted', updateCount, false);

//USING HTML5 EVENTS
function setup2() {
    var textInput;
    textInput = document.getElementById('message');
    textInput.focus();
}

window.addEventListener('DOMContentLoaded', setup2, false);

window.addEventListener('beforeunload', function(event) {
    var message = 'You have changes that have not been saved';
    (event || window.event).returnValue = message;
    return message;
}, false);

//FINAL EXAMPLE
var noteInput, noteNameF, textEnteredF, targetF;

noteNameF = document.getElementById('noteNameF');
noteInput = document.getElementById('noteInput');

function writeLabel(e) {
    if(!e) {
        e = window.event;
    }
    targetF = e.targetF || e.srcElement;
    textEnteredF = targetF.value;
    noteNameF.innerText = textEnteredF;
}



function recorderControls(e) {
    if (!e) {
        e = window.event;
    }
    targetF = e.targetF || e.srcElement;
    if (event.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }

    switch (targetF.getAttribute('data-state')) {
        case 'record':
            record(targetF);
            break;
        case 'stop':
            stop(targetF);
            break;
    }
};


function record(targetF) {
    targetF.setAttribute('data-state', 'stop');
    targetF.textContent = 'stop';
}

function stop(targetF) {
    targetF.setAttribute('data-state', 'record');
    targetF.textContent = 'record';
}



if (document.addEventListener) {
    document.addEventListener('click', function(e) {
        recorderControls(e);
    }, false);
    noteInput.addEventListener('input', writeLabel, false);
} else {
    document.attachEvent('onclick', function(e) {
        recorderControls(e);
    });
    noteInput.attachEvent('onkeyup', writeLabel);
}
