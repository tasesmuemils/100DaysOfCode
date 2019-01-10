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

//firstItem2.setAttribute('class', 'complete');
//lastItem2.setAttribute('class', 'cool');

//Accesing and changing a text node
var itemTwo8 = document.getElementById('two8');
var elText8 = itemTwo8.firstChild.nodeValue;
elText8 = elText8.replace('pine nuts', 'kale');
itemTwo8.firstChild.nodeValue = elText8;

//Accesing text only
var firstItem9 = document.getElementById('one9');
var showTextContent = firstItem9.textContent;
var showeInnerText = firstItem9.innerText;

var msg9 = '<p>textContent result: ' + showTextContent + '</p>';
msg9 += '<p>innerText result: ' + showeInnerText + '</p>';

var el9 = document.getElementById('scriptResult9');
el9.innerHTML = msg9;

firstItem9.textContent = 'sourdough bread';

//Update text and markup
var firstItem10 = document.getElementById('one10');
var itemContent10 = firstItem10.innerHTML;
firstItem10.innerHTML = '<a href="https://www.finecooking.com/article/fresh-figs">' + itemContent10 + '</a>';

//adding an element to the DOM tree
var newEl10 = document.createElement('li');
var newText10 = document.createTextNode('salami');
newEl10.appendChild(newText10);
var position10 = document.getElementsByTagName('ul')[9];
position10.appendChild(newEl10);

//Removing an elemnt from the DOM tree (I will remove first tables 3 item)
var removeEl10 = document.getElementsByTagName('li')[2];
var parentEl10 = removeEl10.parentNode;
parentEl10.removeChild(removeEl10);

//Check for an attribute and get its value
var firstItem1 = document.getElementById('one');

if (firstItem1.hasAttribute('class')) {
    var attr1 = firstItem1.getAttribute('class');
    var el1 = document.getElementById('scriptResult1');
    el1.innerHTML = '<p>The value offirst items class attribuete: ' + attr1 + '</p>';
}

var secondItem1 = document.getElementById('two');
secondItem1.className = 'hot';
//Remove atrribute
if (secondItem1.hasAttribute('class')) {
    secondItem1.removeAttribute('class');
}

var thirdItem1 = document.getElementsByTagName('li')[2];
thirdItem1.setAttribute('class', 'complete');

//final
var locationF = document.getElementsByTagName('ul')[10];
//first Item
var newFirstElF = document.createElement('li');
var newFirstElTextF = document.createTextNode('kale');
newFirstElF.appendChild(newFirstElTextF);

locationF.insertBefore(newFirstElF, locationF.firstChild);

//last item
var lastItemF = document.createElement('li');
var lastItemTextF = document.createTextNode('cream');
lastItemF.appendChild(lastItemTextF);

locationF.appendChild(lastItemF);

var listItems = locationF.querySelectorAll('li');
for (let i = 0; i < listItems.length; i++) {
    listItems[i].className = 'cool';
}

var headerLocation = document.getElementById('FINAL');
var heading = headerLocation.querySelector('h2');
var headingText = heading.firstChild.nodeValue;
var productCount = listItems.length;
var newFinalHeading = headingText + '<span>' + productCount + '</span>';
heading.innerHTML =  newFinalHeading;
heading.firstChild.setAttribute = 'class';
heading.lastChild.className = 'productCountStyle';







