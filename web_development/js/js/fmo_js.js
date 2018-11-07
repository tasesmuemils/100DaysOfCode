//A basic function
var msg = 'Sign up to receive our newsletter for 10% off!';

function updateMessage() {
    var el = document.getElementById("message");
    el.textContent = msg;
}

updateMessage();

//Creating objects using literal notation
var hotel = {
    name: 'Quay',
    rooms: 40,
    booked: 25,
    checkAvailabilty: function() {
        return this.rooms - this.booked
    }
}

var elName = document.getElementById("hotelName");
elName.textContent = hotel.name;

var elRooms = document.getElementById("rooms");
elRooms.textContent = hotel.checkAvailabilty();

//Creating more object literals
var hotel2 = {
    name: 'Park',
    rooms: 120,
    booked: 77,
    checkAvailabilty: function () {
        return this.rooms - this.booked;
    }
}

var elName2 = document.getElementById('hotelName2');
elName2.textContent = hotel2.name;

var elRooms2 = document.getElementById("rooms2");
elRooms2.textContent = hotel2.checkAvailabilty();

//Creating objects using constructor syntax
var hotel3 = new Object();

hotel3.name = 'Jandze';
hotel3.rooms = 156;
hotel3.booked = 68;
hotel3.checkAvailabilty = function()  {
    return hotel3.rooms - hotel3.booked
}

var elName3 = document.getElementById("hotelName3");
elName3.textContent = hotel3.name;
var elRooms3 = document.getElementById("rooms3");
elRooms3.textContent = hotel3.checkAvailabilty();

//Using the browser object model
var msg = '<h2>Browser window</h2><p>width:' + window.innerWidth + '</p>';
msg += '<p>height: ' + window.innerHeight + '</p>';
msg += '<h2>History</h2><p>item: ' + window.history.length + '</p>';
msg += '<h2>Screen</h2><p>width: ' + window.screen.width + '</p>';
msg += '<p>height: ' + window.screen.height + '</p>';

var elMsg = document.getElementById('info');
elMsg.innerHTML = msg;
//alert('Current page: ' + window.location); //drops alert message