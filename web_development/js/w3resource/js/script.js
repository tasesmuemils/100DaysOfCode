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