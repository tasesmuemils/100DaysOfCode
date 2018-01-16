var score1=8;
var score2=8;
var pass1=6;
var pass2=6;

//check if both rounds exam are passed
var passExam = (score1 >= pass1) && (score2 >= pass2);


//create a message
var msg = 'You have to pass both rounds to get final grade. Both rounds passed: ' + passExam;

//write the message into the page
var el = document.getElementById('answer3');
el.textContent = msg;
