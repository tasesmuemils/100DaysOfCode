//Section1
var price;
var quantity;
var total;

price = 5;
quantity = 14;
total = price * quantity;

var el = document.getElementById("cost");
el.textContent = '$' + total;

//Section2
var username;
var message;

username = "Emils";
message = "See our upcoming range";

var elName = document.getElementById("name");
elName.textContent = username;
var elNote = document.getElementById("note");
elNote.textContent = message;

