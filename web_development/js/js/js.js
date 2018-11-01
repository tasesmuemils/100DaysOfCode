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
