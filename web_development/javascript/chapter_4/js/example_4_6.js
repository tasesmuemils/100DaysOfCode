var pass = 50;
var score = 75;
var msg;

if (score >= pass) {
  msg = 'Congratulations, you passed!';
} else {
  msg = 'You failed! Try again!'
}

var el = document.getElementById('answer6_1');
el.innerHTML = msg;


///alternatiiva

var pass = 50;
var score = 35;
var msg = '';

function congratulate() {
  msg += 'Congratulations! You passed!';
}

function encourage() {
  msg += 'Better luck next time!';
}

if (score >= pass) {
  congratulate();
} else {
  encourage();
}

var el = document.getElementById('answer6_2');
el.innerHTML = msg;
