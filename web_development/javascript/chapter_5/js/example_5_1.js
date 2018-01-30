/*
//izvelamies nepieciesamo elemntu
var el = document.getElementById('one');

// tagad nomaina klases vertibu, kalses background color jau ir defineta CSS failaa
el.className = 'hot';

//Izvelas nepieciesano elementu vai elemntus peec class vertiibas
var elements = document.getElementsByClassName('hot');

//ja NodeListaa ir vairak ka divas vertibas, kods izpildaas
if (elements.length > 2) {
  var el = elements[2]; //izveido variabli kura saglabasies 3 items no nodelist
  el.className = 'cool'; //samaina 3saa NodeList item class vertiibu
}


//izvelas elementu pec tag className
var elements = document.getElementsByTagName('li');

if (elements.length > 0) {
  var el = elements[0];
  el.className = 'hot';
}

//querySelector() atgriez tikai pirmo atbilstoso vertiibu
var elements = document.querySelector('li.hot');
el.className = 'cool';

var els = document.querySelectorAll('li.hot');
els[1].className = 'cool';

//saglaba NodeList iekss array
var hotItems = document.querySelectorAll('li.hot');

if (hotItems.length > 0) {  //ja Nodelista ir vairak ka 0 items
  for (var i = 0; i < hotItems.length; i++) {
    hotItems[i].className = 'cool';
  }
}
*/

/*//atzimmee atsperiena punktu un atrod ta radinieku
var startItem = document.getElementById('two');
var prevItem = startItem.previousSibling;
var nextItem = startItem.nextSibling;

//maina vertibu kaiminju class atributiem
prevItem.className = 'complete';
nextItem.className = 'cool';*/


/*var startItem = document.getElementsByTagName('ul')[0];
var firstItem = startItem.firstChild;
var lastItem = startItem.lastChild;

firstItem.setAttribute('class', 'complete');
lastItem.setAttribute('class', 'cool'); */

/*var itemTwo = document.getElementById('two'); //iegust otro elementu no ul
var elText = itemTwo.firstChild.nodeValue; //ieguust texta nodes saturu
elText = elText.replace('pine nuts', 'potatoe'); //samaina tekstu
itemTwo.firstChild.nodeValue = elText; //updeito vertiibu
*/

/*var itemOne = document.getElementById('one');
var showTextContent = itemOne.textContent;
var showInnerText = itemOne.innerText;

var msg = '<p> textContent: ' + showTextContent + '</p>';
  msg += '<p> innerText: ' + showInnerText + '</p>';
var el = document.getElementById('scriptResults');
el.innerHTML = msg;

itemOne.textContent = 'brown bread';  */

//izvelas pirmo li elementu
var firstItem = document.getElementById('one');

//dabuj elementa saturu
var itemContent = firstItem.innerHTML;

//Updeito saturu pirmajam elementam lai tas butu links
firstItem.innerHTML = '<a href=\"http://www.finecooking.com/article/fresh-figs"\>' + itemContent + '</a>';
