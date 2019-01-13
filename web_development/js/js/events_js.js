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