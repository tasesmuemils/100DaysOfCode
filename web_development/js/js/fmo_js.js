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
    checkAvailabilty: function () {
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
hotel3.checkAvailabilty = function () {
    return hotel3.rooms - hotel3.booked
}

var elName3 = document.getElementById("hotelName3");
elName3.textContent = hotel3.name;
var elRooms3 = document.getElementById("rooms3");
elRooms3.textContent = hotel3.checkAvailabilty();

//Create and access objects constructor notation
function Hotel4(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailabilty = function () {
        return this.rooms - this.booked; //The return statement stops the execution of a function and returns a value from that function.
    }
}

var quayHotel = new Hotel4('Quay', 40, 25);
var parkHotel = new Hotel4('Park', 120, 77);

var details1 = quayHotel.name + ' rooms: ' + quayHotel.checkAvailabilty();
var elHotel1 = document.getElementById("hotel1");
elHotel1.textContent = details1;

var details2 = parkHotel.name + ' rooms: ' + parkHotel.checkAvailabilty();
var elHotel2 = document.getElementById("hotel2");
elHotel2.textContent = details2;

//Adding and removing properties
var hotel5 = {
    name: 'Park',
    rooms: 120,
    booked: 77
}

hotel5.pool = false;
hotel5.gym = true;
delete hotel5.booked;

var elName5 = document.getElementById("hotelName5");
elName5.textContent = hotel5.name;

var elPool = document.getElementById("pool");
elPool.textContent = 'Pool: ' + hotel5.pool;

var elGym = document.getElementById("gym");
elGym.textContent = 'Gym: ' + hotel5.gym;

//Using the browser object model
var msg = '<h2>Browser window</h2><p>width:' + window.innerWidth + '</p>';
msg += '<p>height: ' + window.innerHeight + '</p>';
msg += '<h2>History</h2><p>item: ' + window.history.length + '</p>';
msg += '<h2>Screen</h2><p>width: ' + window.screen.width + '</p>';
msg += '<p>height: ' + window.screen.height + '</p>';

var elMsg = document.getElementById('info');
elMsg.innerHTML = msg;
//alert('Current page: ' + window.location); //drops alert message

//Using DOM
var msg2 = '<p><b>Page Title: </b>' + document.title + '<br />';
msg2 += '<b>Page adress: <b/>' + document.URL + '<br />';
msg2 += '<b>Last modified: </b>' + document.lastModified + '</p>';

var elFooter = document.getElementById('footer');
elFooter.innerHTML = msg2;

//Working with string
var saying = 'Home sweet home ';
var msg3 = '<h2>Length</h2><p>' + saying.length + '</p>';
msg3 += '<h2>Uppercase: </h2><p>' + saying.toUpperCase() + '</p>';
msg3 += '<h2>Lowercase</h2><p>' + saying.toLowerCase() + '</p>';
msg3 += '<h2>Character index: 12</h2><p>' + saying.charAt(12) + '</p>';
msg3 += '<h2>First ee: </h2><p>' + saying.indexOf('ee') + '</p>';
msg3 += '<h2>Last e: </h2><p>' + saying.lastIndexOf('e') + '</p>';
msg3 += '<h2>Character: index: 8-14</h2><p>' + saying.substring(8, 14) + '</p>';
msg3 += '<h2>Replace: </h2><p>' + saying.replace('me', 'w') + '</p>';

var elInfo2 = document.getElementById('info2');
elInfo2.innerHTML = msg3;

//Working with decimal numbers
var originalNumber = 10.23456;

var msg4 = '<h2>Original number</h2><p>' + originalNumber + '</p>';
msg4 += '<h2>3 decimal places</h2><p>' + originalNumber.toFixed(3) + '</p>';
msg4 += '<h2>3 digits</h2><p>' + originalNumber.toPrecision(3) + '</p>';

var elDecimal = document.getElementById('info3');
elDecimal.innerHTML = msg4;

//Math object to create random numbers
var randomNum = Math.floor((Math.random() * 10) + 1);

var elRandom = document.getElementById('info4');
elRandom.innerHTML = randomNum;

//Creating a date object
var today = new Date();
var year = today.getFullYear();

var elDate = document.getElementById('footer2');
elDate.innerHTML = '<p>Copytight &copy; ' + year + '</p>';

//Working with dates & times
var today2 = new Date();
var year2 = today2.getFullYear();
var est = new Date('Apr 16, 1996 15:45:55');
var difference = today2.getTime() - est.getTime();
difference = (difference / 31556900000);

var elDate2 = document.getElementById('info5');
elDate2.textContent = Math.floor(difference) + ' years of online travel advice';


//FINAL

/*The script is place inside an immediately invoked function
expression which helps protect the scope of variables*/
(function () {
        //PART ONE: CREATE HOTEL OBJECT AND WRITE OUT THE OFFER DETAILS
        var hotel = {
            name: 'Jandze',
            roomRate: 240,
            discounts: 15,
            offerPrice: function () {
                var offerRate = this.roomRate * ((100 - this.discounts) / 100);
                return offerRate;
            }
        };
        var hotelNameFinal, roomRate, specialRate;

        hotelNameFinal = document.getElementById('hotelNameFinal');
        roomRate = document.getElementById('hotelRate');
        specialRate = document.getElementById('specialRate');

        hotelNameFinal.textContent = hotel.name;
        roomRate.textContent = 'Price $' + hotel.roomRate;
        specialRate.textContent = 'Price with discount $' + hotel.offerPrice();

        //PART TWO: CALCULATE AND WRITE THE EXPIRY DETAILS FOR THE OFFER
        var expiryMsg;
        var today;
        var elEnds;

        function offerExpires(today) {
            var weekFromToday, day, date, month, year, dayNames, monthNames;
            weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
            dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            monthNames = ['January', 'February', 'March', 'April', 'May', 
            'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            day = dayNames[weekFromToday.getDay()];
            date = weekFromToday.getDate();
            month = monthNames[weekFromToday.getMonth()];
            year = weekFromToday.getFullYear();

            expiryMsg = 'Offer expires next ';
            expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
            return expiryMsg;
        }
        today = new Date();
        elEnds = document.getElementById('offerEnds');
        elEnds.innerHTML = offerExpires(today);
    }
());