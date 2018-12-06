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
