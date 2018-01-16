var score1=50;
var score2=30;
var highScore1=50;
var highScore2=50;

var examPassed = (score1 + score2) > (highScore1 + highScore2);

var el = document.getElementById('answer2');
el.innerHTML = 'You need to get at least 100 to gest past previous record. New high score: ' + examPassed;
