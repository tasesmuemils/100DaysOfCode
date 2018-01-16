var score1 = 8;
var score2 = 8;
var pass1 = 6;
var pass2 = 6;

// check if user have passed at least one condition
var minPass = (score1 >= pass1) || (score2 >= pass2);

//declare a message
var msg = 'At least one test must be higher then 6. Resit required: ' + !(minPass);

// write the message
var el = document.getElementById('answer4');
el.textContent = msg;
