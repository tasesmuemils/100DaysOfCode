//Task 1
var p1 = document.getElementById('pOne');
var firstTaskbutton = document.getElementById('firstTaskbutton');

function styleText() {
    p1.className = 'textOneEdit';
    firstTaskbutton.textContent = 'Close (double click)';
}

function unStyleText() {
    p1.removeAttribute('class');
    firstTaskbutton.textContent = 'Check';
}

firstTaskbutton.addEventListener('click', styleText, false);
firstTaskbutton.addEventListener('dblclick', unStyleText, false);

//Task 2
var name2 = document.getElementById('task2Name');
var surname2 = document.getElementById('task2Surname');
var show2Name = document.getElementById('name2value');
var show2Surname = document.getElementById('surname2value');
var secondTaskbutton = document.getElementById('secondTaskbutton');
var clear2 = document.getElementById('clear2');


function show2values() {
    var name2value = name2.value;
    var surname2value = surname2.value;
    show2Name.textContent = 'Your name is ' + name2value;
    show2Surname.textContent = 'Your surname is ' + surname2value;
}

function clear2values() {
    if (name2.value != '' && surname2.value != '') {
        name2.value = '';
        surname2.value = '';
        show2Name.textContent = '';
        show2Surname.textContent ='';
    }
}

secondTaskbutton.addEventListener('click', show2values, false);
clear2.addEventListener('click', clear2values, false);

//Task 3
var changeBackground = document.getElementById('pThree');
var thirdTaskbutton = document.getElementById('thirdTaskbutton');

function changeBackColor() {
    changeBackground.className = 'changebackgrond';
    thirdTaskbutton.textContent = 'Back to normal';
}

function unStyleBackground() {
    changeBackground.removeAttribute('class');
    thirdTaskbutton.textContent = 'Check';
}

thirdTaskbutton.addEventListener('click', changeBackColor, false);
thirdTaskbutton.addEventListener('dblclick', unStyleBackground, false);

//Task4
var w3link = document.getElementById('w3r');
var fourTaskButton = document.getElementById('fourTaskButton');
var result4 = document.getElementById('result4');
var msg4 = '';


function getLinksAttributes() {
    var w3href = w3link.href;
    var w3type = w3link.type;
    var w3hreflang = w3link.hreflang;
    var w3rel = w3link.rel;
    var w3target = w3link.target;
    msg4 = '<p>Link: ' + w3href +'</p><p>Type: ' + w3type + '</p>';
    msg4 += '<p>Language: ' + w3hreflang + '</p><p>Rel: ' + w3rel + '</p>';
    msg4 += '<p>Target: ' + w3target + '</p>';
    result4.innerHTML = msg4;
    fourTaskButton.textContent = 'Close';
}

function clearTask4() {
    result4.innerHTML = '';
    fourTaskButton.textContent = 'Check';
}

fourTaskButton.addEventListener('click', getLinksAttributes, false);
fourTaskButton.addEventListener('dblclick', clearTask4, false);

//Task 5