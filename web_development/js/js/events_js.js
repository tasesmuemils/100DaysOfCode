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