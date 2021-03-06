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

//Using IF statments
var score7 = 75;
var msg3;

if (score7 >= 50) {
    msg3 = 'Congratulations! ';
    msg3 += 'Proceed to the next round.'
}

var elAnswer5 = document.getElementById('answer5');
elAnswer5.textContent = msg3;
                 //IF alternative
var score8 = 75;
var msg4 = '';

function congratulate() {
    msg4 += 'Congratulations! ';
}

if (score8 >= 50) {
    congratulate();
    msg4 += 'Proceed to the next round.'
}

var elAnswer6 = document.getElementById('answer6');
elAnswer6.textContent = msg4;

//Using IF...ELSE statments
var passElse = 75;
var scoreElse = 50;
var msg5;

if (scoreElse >= passElse) {
    msg5 = 'Congratulations, you passed!';
} else {
    msg5 = 'Have another go!'
}

var elAnswer7 = document.getElementById('answer7');
elAnswer7.textContent = msg5;

//Using SWITCH statments
var msg6;
var level = 2;

switch (level) {
    case 1:
        msg6 = 'Good luck on the first test';
        break;

    case 2:
        msg6 = 'Second of three - keep going!';
        break;
    case 3:
        msg6 = 'Final round, almost there!';
        break;

    default:
        msg6 = 'Good luck!';
        break;
}

var elAnswer8 = document.getElementById('answer8');
elAnswer8.textContent = msg6;

//Using for loops
var scores9 = [24, 37, 15]; //array with scores
var arrayLength9 = scores9.length; //saskaita items iekss array
var roundNumber9 = 0; //current round
var msg9 = ''; // Message
var i; //counter


//loop through items in array
for (var i = 0; i < arrayLength9; i++) {
  //Arrays are zero based (so 0 is round 1)
  //Add 1 to the current round
  roundNumber9 = (i + 1);
  //Write current message out
  msg9 += 'Round ' + roundNumber9 + ': ';
  msg9 += scores9[i] + '<br / >';
}

// Kapec rounds sakas ar 1 nevis 0? jo roundNumber tike definets pirms messages un
//gan i, gan roundnumber ir 0, tadelj roundNumber = (i(0) + 1) === 1, rounds sakas no viens

document.getElementById('answer9').innerHTML = msg9;

//Using while loops
var i10 = 1;
var msg10 = '';

while (i10 < 11) {
    msg10 += i10 + ' x 5 = ' + (i10 * 5) + '<br />';
    i10++;
}

document.getElementById('answer10').innerHTML = msg10;

//Using do while loops
var i11 = 1;
var msg11 = '';

do {
    msg11 += i + ' x 6 = ' + (i11 * 6) + '<br />';
}
while (i < 1);

document.getElementById('answer11').innerHTML = msg11;

////FINAL
var iFinal = 1;
var operator = 'addition';
var msgFinal = '';

if (operator === 'addition') {
    while (iFinal < 11) {
        msgFinal += iFinal + ' + 3 = ' + (iFinal + 3) + '<br />';
        iFinal++;
    }
} else {
    while (iFinal < 11) {
        msgFinal += iFinal + ' x 3 = ' + (iFinal * 3) + '<br />';
        iFinal++;
    }
}


document.getElementById('answerFinal').innerHTML = msgFinal;
