//Using comparsion operators
var pass = 50;
var score = 90;

var passed = score >= pass; //check if score is greather or equal with pass

var elPassed = document.getElementById('answer');
elPassed.textContent = 'Level passed: ' + passed;

//Comparing two expressions
var score1 = 90;
var score2 = 95;
var highScore1 = 75;
var highScore2 = 95;

var comparison = (score1 + score2) > (highScore1 + highScore2);

var elHigh = document.getElementById('answer2');
elHigh.textContent = 'New high score: ' + comparison;

//Using logical end
var score3 = 8;
var score4 = 8;
var pass1 = 6;
var pass2 = 6;

var passBoth = (score3 >= pass1) && (score4 >= pass2);

var msg = 'Both rounds passed: ' + passBoth;

var elAnswer3 = document.getElementById('answer3');
elAnswer3.textContent = msg;

//Using logical or & logical not
var score5 = 8;
var score6 = 8;
var pass3 = 6;
var pass4 = 6;

var minPass = ((score5 >= pass3) || (score6 >= pass4));

var msg2 = 'Resit required: ' + !minPass;

var elMinPass = document.getElementById('answer4');
elMinPass.textContent = msg2;