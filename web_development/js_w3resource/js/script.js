/*This is my JS trining.
I will try to complete www.w3resource.com JS tasks from Basic to everything else.*/

//Task 1
//Write a JavaScript program to display the current day and time in the following format.
/* Sample Output : Today is : Tuesday.
Current time is : 22:56:33*/
var today = new Date();
var daysNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var day = daysNames[today.getDay()];
var year = today.getFullYear();
var hours = today.getHours();
if (hours < 10) {
    hours = '0' + hours;
}
var minutes = today.getMinutes();
if (minutes < 10) {
    minutes = '0' + minutes;
}
var seconds = today.getSeconds();
if (seconds < 10) {
    seconds = '0' + seconds;
}


var msgDate = document.getElementById('dateSolution');
msgDate.innerHTML = '<p>Today is: ' + day + '</p>';
msgDate.innerHTML += '<p>Current time is: ' + hours + ':' + minutes + ':' + seconds +  '</p>';

//Task 2
//Write a JavaScript program to print the contents of the current window.
var wContentWidth = window.innerWidth;
var wContentHeight = window.innerHeight;
var wContentLocation = window.location;

document.getElementById('windowWidth').textContent = wContentWidth;
document.getElementById('windowHeight').textContent = wContentHeight;
document.getElementById('windowLocation').textContent = wContentLocation;

//Tska 3
/*Write a JavaScript program to get the current date.
Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy */
var today2 = new Date();
var todays2Date = today2.getDate();
if (todays2Date < 10) {
    todays2Date = '0' + todays2Date;
}
var todays2Month = today2.getMonth();
if (todays2Month < 10) {
    todays2Month = '0' + todays2Month;
}
var todays2Year = today2.getFullYear();
var messageDate1 = todays2Month + '/' + todays2Date + '/' + todays2Year + '<br />';
messageDate1 += todays2Month + '-' + todays2Date + '-' + todays2Year + '<br />';
messageDate1 += todays2Date + '-' + todays2Month + '-' + todays2Year + '<br />';
messageDate1 += todays2Date + '/' + todays2Month + '/' + todays2Year;

document.getElementById('date2Solution').innerHTML = messageDate1;

//Task 4
//Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
var line1 = 5;
var line2 = 6;
var line3 = 7;
var halfP = (line1 + line2 + line3)/2;
var triangleArea = Math.sqrt(halfP * (halfP - line1) * (halfP - line2) * (halfP - line3));

document.getElementById('triangleSolution').innerHTML = '<p>Area of this triangle will be ' + triangleArea + '</p>';

//Task 5 (no exact problem but still cool)
//Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one
//letter from the end of the string and attaching it to the front.
var basicString = 'w3resource';
var basicStringLength = basicString.length;
var reverseString = '';

while (basicStringLength > -1) {
    var lastChar = basicString.charAt(basicStringLength - 1);
    reverseString += lastChar;
    basicStringLength -= 1;
}

document.getElementById('reverseStringSolution').textContent = reverseString;

//Task6 (LATAR, TOO HARD)
//Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
/*var today3 = new Date();
var today3Time  = (today3.getTime(), 0, 0);
var today3Days = today3Time + 365 * 24 * 60 * 60 * 1000;*/



