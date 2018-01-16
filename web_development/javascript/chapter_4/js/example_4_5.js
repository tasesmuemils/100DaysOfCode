var score = 75; // Score
var msg; //Message

//ja score ir >= par 50, izmetas zina
if (score >= 50) {
  msg = 'To proceed to the next round, you have to get at least 50 points.'
  msg += ' Congratulations!';
  msg += ' Proceed to the next round.';
}

var el = document.getElementById('answer5_1');

el.textContent = msg;


///alternativa
var score = 75;
var msg = '';

function congratulate() {
  msg += 'Congratlations! ';
}

if (score >= 50) {
  congratulate(); //izsauc funkciju un palaiz to
  msg += 'Proceed to the next round.'; //palaiz pec congratulate funkcijas
}

var el = document.getElementById('answer5_2');
el.innerHTML = msg;
