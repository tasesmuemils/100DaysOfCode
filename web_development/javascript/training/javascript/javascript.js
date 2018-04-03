
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




var firstName = document.getElementsByTagName('input');
function getNameAndUsername() {
  var fName = firstName.getAttribute('value');
  var results = document.getElementById('scriptResults')
  results.textContent = 'Your name is' + fName;
}

var getValues = document.getElementById('getValue');
getValues.addEventListener('click', getNameAndUsername);
