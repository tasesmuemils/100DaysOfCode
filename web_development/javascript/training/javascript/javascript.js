
var bgContainer = document.getElementById('bgColorChange');

function changeBackgroundColor() {
  bgContainer.className = 'colorChange';
}


var bgButton = document.getElementById('backgroundButton');
bgButton.addEventListener('click', changeBackgroundColor);


function changeTextStyle() {
  var changeText = document.getElementById('textChange');
  changeText.className = 'changeTextLook';
}

var bgButton = document.getElementById('textButton');
bgButton.addEventListener('click', changeTextStyle);




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
