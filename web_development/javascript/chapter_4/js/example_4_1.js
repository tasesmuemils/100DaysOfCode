var pass=50; //pass mark
var score=90; //Score

var hasPassed = score >= pass;

//Write the message into the page
var el = document.getElementById('answer');
el.textContent = 'You need to get at least 50 to past this exam. Level passed: ' + hasPassed;
