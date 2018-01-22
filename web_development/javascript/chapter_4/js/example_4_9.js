var i = 1; //Set counter to 1
var msg = ''; //message


//Tatad ja i ir mazaks par 10, izmetisies zinja
//1 x 5 = 5
//nakosais bus 2 x 5 = 10
while (i < 10) {
  msg += i + ' x 5 = ' + (i * 5) + '<br />';
  i++;
}

document.getElementById('answer9').innerHTML = msg;
