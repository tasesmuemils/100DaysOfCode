var scores = [24, 37, 15]; //array with scores
var arrayLength = scores.length; //saskaita items iekss array
var roundNumber = 0; //current round
var msg = ''; // Message
var i; //counter


//loop through items in array
for (i = 0; i < arrayLength; i++) {
  //Arrays are zero based (so 0 is round 1)
  //Add 1 to the current round
  roundNumber = (i + 1);
  //Write current message out
  msg += 'Round ' + roundNumber + ': ';
  msg += scores[i] + '<br / >';
}

// Kapec rounds sakas ar 1 nevis 0? jo roundNumber tike definets pirms messages un
//gan i, gan roundnumber ir 0, tadelj roundNumber = (i(0) + 1) === 1, rounds sakas no viens

document.getElementById('answer8').innerHTML = msg;
