//the document object model: the document object


var msg = '<p><b>page title</b>: ' + document.title + '<br />';
msg += '<b>page address: </b>' + document.URL + '<br />';
msg += '<b>last modified: </b>' + document.lastModified + '<br />';
msg += '<b>domain: </b>' + document.domain + '</p>'
var el = document.getElementById('footer');
el.innerHTML = msg;
