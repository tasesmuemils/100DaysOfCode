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

/*
//izvelas pirmo li elementu
var firstItem = document.getElementById('one');

//dabuj elementa saturu
var itemContent = firstItem.innerHTML;

//Updeito saturu pirmajam elementam lai tas butu links
firstItem.innerHTML = '<a href=\"http://www.finecooking.com/article/fresh-figs"\>' + itemContent + '</a>';
*/

/*
//pievieno elemntu DOM kokam ar DOM manipulation metodi
//izveido jaunu elementu un pievieno to variablim
var newEl = document.createElement('li');

//izveido text node un saglaba to variablii
var newText = document.createTextNode('makarones');

//pievieno jauno text node getElementsByTagName
newEl.appendChild(newText);

//atrod poziiciju kur pievienot jauno elementu
var position = document.getElementsByTagName('ul')[0];

//pievieno jauno elementu DOM kokam
position.appendChild(newEl);
*/

/*
//dzest elementu no DOM koka
//atziimee elemntu kuru nepieciesams dzest
var removeEl = document.getElementsByTagName('li')[3];

//atzime parent elementu elementam kuru nepieciesams dzest
var containerEl = removeEl.parentNode;

//dzes elementu
containerEl.removeChild(removeEl);
*/


/*
//parbauda vai ir atributs un ieguust taa veertiibu
//iegust pirmo list items
var firstItem = document.getElementById('one');

//ja atributam ir vertiba/ ieguust to
if (firstItem.hasAttribute('class')) {
  var attr = firstItem.getAttribute('class');

  var el = document.getElementById('scriptResults');
  el.innerHTML = '<p> Value of attribute: ' + attr + '</p>';
}
*/

/*
//izveidot attributes un mainit to vertiibas
//iegust pirmo item
var firstItem = document.getElementById('one');
//maina class atributa vertibu
firstItem.className = 'complete';

//iegust 4 list item
var fourthItem = document.getElementById('four');
//samaina atributa vertibu
fourthItem.setAttribute('class', 'cool');
*/

/*
//dzest atributus
//iegust pirmo vertiibu
var firstItem = document.getElementById('one');
//ja ir tads atributs tad to dzes
if (firstItem.hasAttribute('class')) {
  firstItem.removeAttribute('class');
}
*/

//pievieno papildus <li> listes sakuma un beigaas
var endElement = document.createElement('li');
var endText= document.createTextNode('potatoe');
endElement.appendChild(endText);

var list = document.getElementsByTagName('ul')[0];
list.appendChild(endElement);

var firstElement = document.createElement('li');
var firstText = document.createTextNode('milk');
firstElement.appendChild(firstText);

list.insertBefore(firstElement, list.firstChild);



//maina klases atributu visiem li elementiem
var listItems = document.querySelectorAll('li');

for (var i = 0; listItems.length > i; i++) {
  listItems[i].className = 'cool';
}


//
var heading = document.querySelector('h2');
var headingText = heading.firstChild.nodeValue;
var totalItems = listItems.length;
var newHeading = headingText + totalItems;
heading.innerText = newHeading;
