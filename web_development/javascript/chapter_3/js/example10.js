var today = new Date();
var year = today.getFullYear(2018);
var date = today.toDateString();
var time = today.toTimeString();


var el = document.getElementById('footerDate');
el.innerHTML = '<p>Copyright &copy;' + year + '</p>';
el.innerHTML += '<p>Month: ' + date + '</p>';
el.innerHTML += '<p>Time: ' + time + '</p>';
