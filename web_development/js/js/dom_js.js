//Selecting individual elements using ID attributes
var el = document.getElementById('one');
el.className = 'cool';   

//Selecting elements using CLASS attributes
var elements2 = document.getElementsByClassName('hot2');

if (elements2.length > 1) {
    var el2 = elements2.item(2);
    el2.className = 'cool'; 
}

//Selecting elements by tag name (1 task)
var elements3 = document.getElementsByTagName('li');

if (elements3.length > 0) {
    var el3 = elements3[1];
    el3.className = 'cool';
}

//Selecting elements using CSS selector
//querySelector() only returns first value
var el4 = document.querySelector('li.hot4');
el4.className = 'cool';

//querySelectorAll() returns NodeList
//The seconfd matching element (the third list item) is selected and changed
var el4point2 = document.querySelectorAll('li.hot4');
el4point2[1].className = 'cool';

//Looping through a NiodeList
var allElements5 = document.querySelectorAll('li.hot5');
for (var i=0; i < allElements5.length; i++) {
    allElements5[i].className = 'cool';
}

//Previous and next sibling
//to use theese on Chrome, I have to get rid of whitespaces
var startItem = document.getElementById('two6');
var previousItem = startItem.previousSibling;
var nextItem = startItem.nextSibling;

previousItem.className = 'complete';
nextItem.className = 'cool';

//First and last child
//to use theese on Chrome, I have to get rid of whitespaces
var startItem2 = document.getElementsByTagName('ul')[6];
var firstItem2 = startItem2.firstChild;
var lastItem2 = startItem2.lastChild;

firstItem2.setAttribute('class', 'complete');
lastItem2.setAttribute('class', 'cool');







