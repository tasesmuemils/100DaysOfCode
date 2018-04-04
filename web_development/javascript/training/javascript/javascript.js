//Change background
var bgContainer = document.getElementById('bgColorChange');

function changeBackgroundColor() {
  bgContainer.className = 'colorChange';
}

var bgButton = document.getElementById('backgroundButton');
bgButton.addEventListener('click', changeBackgroundColor);
//


//Change sentence style
function changeTextStyle() {
  var changeText = document.getElementById('textChange');
  changeText.className = 'changeTextLook';
}

var bgButton = document.getElementById('textButton');
bgButton.addEventListener('click', changeTextStyle);
//

//Show values of the form when holding on button
var firstName = document.getElementById('name');
var lastName = document.getElementById('surname')
function getNameAndUsername() {
  var fName = firstName.getAttribute('value');
  var fSurname = lastName.getAttribute('value');
  var results = document.getElementById('scriptResults')
  results.textContent = 'Your name is' + ' ' + fName + ' and your last name is ' + fSurname;
}

var getValues = document.getElementById('getValue');
getValues.addEventListener('mousedown', getNameAndUsername);

//all values of a tag
var aTag = document.getElementById('w3r');

function getValuesFromATag() {
  var aTagLink = aTag.getAttribute('href');
  var aTagHrefLang = aTag.getAttribute('hreflang');
  var aTagRel = aTag.getAttribute('rel');
  var aTagTarget = aTag.getAttribute('target');
  var resultsOfATag = document.getElementById('scriptResultSecond');
  resultsOfATag.innerHTML = 'Link: ' + aTagLink + '<br>Language: ' + aTagHrefLang +
  '<br>Rel:' + aTagRel + '<br>Target: ' + aTagTarget;
}

var getValuesATag = document.getElementById('ValuesButton');
getValuesATag.addEventListener('click', getValuesFromATag);

//insert Row

var newRowPosition = document.getElementsByTagName('table')[0];

function newRowFun() {
  var newRow = document.createElement('tr');
  var newCell = document.createElement('td');
  var newCellsText = document.createTextNode('Extra cells');
  newCell.appendChild(newCellsText);
  newRow.appendChild(newCell);
  newRowPosition.appendChild(newRow);
}

var newRowButton = document.getElementById('insertRow');
newRowButton.addEventListener('click', newRowFun)
