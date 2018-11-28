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



