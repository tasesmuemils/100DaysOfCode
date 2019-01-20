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
        show2Surname.textContent = '';
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
    msg4 = '<p>Link: ' + w3href + '</p><p>Type: ' + w3type + '</p>';
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
//This was befor I knew there is TABLE object in JS
var table5 = document.getElementById('table5');
var fifthTaskbutton = document.getElementById('fifthTaskbutton');
var clear5 = document.getElementById('clear5');
var tables5body = table5.childNodes[1];

function addRows5() {
    var table5row = document.createElement('tr');
    for (var i = 0; i < 2; i++) {
        var table5cell = document.createElement('td');
        table5cell.textContent = 'Extra Row';
        table5row.appendChild(table5cell);
        tables5body.appendChild(table5row);
    }
}

function clearExtraRow() {
    var lastEl = tables5body.lastChild;
    tables5body.removeChild(lastEl);
}

fifthTaskbutton.addEventListener('click', addRows5, false);
clear5.addEventListener('click', clearExtraRow, false);

//Task 6
var dropdown6 = document.getElementById('colorSelect');
var taskButton6 = document.getElementById('taskButton6');

function removeOptions() {
    dropdown6.remove(dropdown6.selectedIndex);
}

taskButton6.addEventListener('click', removeOptions, false);
//Task 7
var dropdown7 = document.getElementById('countItems');
var dropdown7Opt = dropdown7.querySelectorAll('option');
var taskButton7 = document.getElementById('taskButton7');

function alertCount() {
    var array7 = [];
    for (let i = 0; i < dropdown7Opt.length; i++) {
        const color = dropdown7Opt[i].textContent;
        array7.push(color);
    }
    alert('Color count: ' + dropdown7Opt.length + '\nColor list: ' + array7.toString());
}

taskButton7.addEventListener('click', alertCount, false);

//Task 8 
var enteredValue8 = document.getElementById('radiuss8');
var result8 = document.getElementById('result8');
var taskButton8 = document.getElementById('taskButton8');


function sphereVolume() {
    var value= enteredValue8.value;
    var formula = 4/3 * Math.PI * Math.pow(value, 3);
    result8.value = formula;

}

taskButton8.addEventListener('click', sphereVolume, false);

//Task9
var randomImage9 = document.getElementById('randomImage9');
var array9 = ['http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg',
 'http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg',
'http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg'];
var taskButton9 = document.getElementById('taskButton9');
var randNum = document.getElementById('randNum');


function changeImage() {
    for (let i = 0; i < array9.length; i++) {
        var imageRandom = Math.floor(Math.random() * array9.length);
        if (i === imageRandom) {
            randomImage9.src = array9[i];
            array9.splice(i);
        }
    }
}

taskButton9.addEventListener('click', changeImage, false);



