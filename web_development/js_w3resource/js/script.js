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
var minutes = today.getMinutes();
var seconds = today.getSeconds();


var msgDate = document.getElementById('dateSolution');
msgDate.innerHTML = '<p>Today is: ' + day + '</p>';
msgDate.innerHTML += '<p>Current time is: ' + hours + ':' + minutes + ':' + seconds +  '</p>';

//Task 2
//Write a JavaScript program to print the contents of the current window.
