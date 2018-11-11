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
