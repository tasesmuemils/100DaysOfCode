var i = 1;
var msg = '';

do {
  msg += i + ' x 5 = ' + (i * 5) + '<br />';
  i++;
  //seit i jau ir 2, tadelj talak netiek palaista
} while (i < 1);
//ja while ir i < 2, loops palaidisies tapat vienu reizi, jo pie while i jau ir viends ar 2
//taadeel ka do..while palaizas velreiz, nenjemot vera ka iznakums jau ir false

document.getElementById('answer10').innerHTML = msg;
