/*
//HTML event handler attribute
function checkUsername() {
  var elMsg = document.getElementById('feedback'); //dabuj feedbac elementu
  var elUsername = document.getElementById('username'); //dabuj username
  if (elUsername.value.length < 5) {  //ja username ir iisaaks par 5
    elMsg.textContent = 'Username must be 5 characters or more'; //izmetas teksts
  } else {
    elMsg.textContent = '';
  }
}
*/

/*
//USING DOM EVENT HANDLERS
function checkUsername() {
  var elMsg = document.getElementById('feedback');
  if (this.value.length < 5) {
    elMsg.textContent = 'Username must be 5 characters or more';
}

var elUsername = document.getElementById('username');
elUsername.onblur = checkUsername;
*/

function checkUsername() {
  var elMsg = document.getElementById('feedback');
  if (this.value.length < 5) {
    elMsg.textContent = 'Username must be 5 characters or more';
  } else {
    elMsg.textContent = '';
  }
}

var elUsername = document.getElementById('username');

elUsername.addEventListener('blur', checkUsername, false);
