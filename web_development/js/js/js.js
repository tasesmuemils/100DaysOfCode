//Using a variables to store a number
var price;
var quantity;
var total;

price = 5;
quantity = 14;
total = price * quantity;

var el = document.getElementById("cost");
el.textContent = '$' + total;

//Using a variable to store a string
var username;
var message;

username = "Emils";
message = "See our upcoming range";

var elName = document.getElementById("name");
elName.textContent = username;
var elNote = document.getElementById("note");
elNote.textContent = message;

//Using quotes inside string
var title;
var message;

title = "Emils Special Offers!";
message = ' \"Double quotes\" !!! 25% off';

var elTitle = document.getElementById("title2");
elTitle.innerHTML = title;
var elNote = document.getElementById("note2");
elNote.innerHTML = message;

//Using a variable to store a boolean
var inStock;
var shipping;
inStock = true;
shipping = false;

//Changing the value of variable
inStock = false;
shipping = true;

var elStock = document.getElementById("stock");
elStock.textContent = inStock;
var elShip = document.getElementById("shipping");
elShip.textContent = shipping;

//Creating an array
//This way of creating array is called "array literal"
var colors;
colors = ['white', 'black', 'custom'];
/*
This way of creating array is called "array constructor"
var colors = new Array (
    'white',
    'black',
    'custom'
)
*/
var elColors =document.getElementById("colors");
elColors.textContent = colors[0];

//Accessing and changing values in an array
colors[2] = "beige";
elColors.textContent = colors[2];

//Using arithmetic operators
var subtotal = ( 15 + 3 ) * 3;
var shippingArithmetic = 0.5 * (15 + 3);
var totatl = subtotal + shippingArithmetic;

var elSub = document.getElementById("subtotal");
elSub.textContent = subtotal;
var elShippingArithmetic = document.getElementById("shippingArithmetic");
elShippingArithmetic.textContent = shippingArithmetic;
var elTotal = document.getElementById("total");
elTotal.textContent = total;

//Using string operators
var greeting = 'Hi ';
var nameTwo = 'Emils';

var welcomeMessage = greeting + nameTwo + '!';

var elGreet = document.getElementById("greeting");
elGreet.textContent = welcomeMessage;