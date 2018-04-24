//Change background

function changeBackgroundColor() {
  var bgParent = document.getElementById('bgColorChange');
  //get h4 from parent container
  var bgChild = bgParent.getElementsByTagName('h4');
  //get the first h4 (in this case only one)
  var setBackgroung = bgChild[0];
  setBackgroung.style.background = '#790000';
}

var bgButton = document.getElementById('backgroundButton');
bgButton.addEventListener('click', changeBackgroundColor);

//Change sentence style
function changeTextStyle() {
  var changeText = document.getElementById('textChange');
  changeText.style.color = '#7e1111';
  changeText.style.fontSize = '30px';
  changeText.style.outlineStyle = 'solid';
  changeText.style.textDecoration = 'underline';
}

var bgButton = document.getElementById('textButton');
bgButton.addEventListener('click', changeTextStyle);
//

//Show values of the form when holding on button
function getNameAndUsername() {
  var firstName = document.getElementById('name').getAttribute('value');
  var lastName = document.getElementById('surname').getAttribute('value');
  var results = document.getElementById('scriptResults')
  results.textContent = 'Your name is' + ' ' + firstName + ' and your last name is ' + lastName;
}

var getValues = document.getElementById('getValue');
getValues.addEventListener('click', getNameAndUsername);

//all values of a tag
var aTag = document.getElementById('w3r');

function getValuesFromATag() {
  var aTagLink = aTag.getAttribute('href');
  var aTagHrefLang = aTag.getAttribute('hreflang');
  var aTagRel = aTag.getAttribute('rel');
  var aTagTarget = aTag.getAttribute('target');
  var resultsOfATag = document.getElementById('scriptResultSecond');
  resultsOfATag.innerHTML = 'These are all tags from this link: <br>Link: ' + aTagLink + '<br>Language: ' + aTagHrefLang +
  '<br>Rel:' + aTagRel + '<br>Target: ' + aTagTarget;
}

var getValuesATag = document.getElementById('ValuesButton');
getValuesATag.addEventListener('click', getValuesFromATag);

//insert Row

function newRowFun() {
  var newRowPosition = document.getElementsByTagName('table')[0];
  var newRow = document.createElement('tr');
  var newCell = document.createElement('td');
  var newCell2 = document.createElement('td');
  var newCellsText = document.createTextNode('Extra cells');
  var newCellsText2 = document.createTextNode('Extra cells');
  newCell.appendChild(newCellsText);
  newCell2.appendChild(newCellsText2);
  newRow.appendChild(newCell);
  newRow.appendChild(newCell2);
  newRowPosition.appendChild(newRow);
}

var newRowButton = document.getElementById('insertRow');
newRowButton.addEventListener('click', newRowFun)

//change contetn of specific cell
function changeCellContent() {
  //at first lets capture all entered values
  var rowNumber  = document.getElementById('inputRowNumber').value;
  var cellNumber  = document.getElementById('inputCellNumber').value;
  var enteredContent  = document.getElementById('newCellContent').value;
  //capture table
  var wholeTable = document.getElementById('myTable2');
  //capture all table rows
  var wholeTableRows = wholeTable.getElementsByTagName('tr');
  for (var i = 0; i < wholeTableRows.length; i++) {
    if (wholeTableRows[i] === rowNumber) {
      var wholeTableCells = wholeTableRows.getElementsByTagName('td');
      for (var z = 0; z < wholeTableCells.length; z++) {
        if (wholeTableCells[z].length === cellNumber) {
          wholeTableCells[z].textContent = enteredContent;
        }
      }
    }
  }
}

var newCellContentButton = document.getElementById('changeContentOfTheCell');
newCellContentButton.addEventListener('click', changeCellContent);
