var saying = 'Batman is the best! ';

var msg = '<h2>original text</h2><p>' + saying + '</p>';
msg += '<h2>length</h2><p>' + saying.length + '</p>'; //stringa garums
msg += '<h2>uppercase</h2><p>' + saying.toUpperCase() + '</p>'; //lielie burti
msg += '<h2>lowercase</h2><p>' + saying.toLowerCase() + '</p>'; //mazie burti
msg += '<h2>character index 12: </h2><p>' + saying.charAt(12) + '</p>'; //izmed character, kuram ir 12 index numbers stringaa
msg += '<h2>First th</h2><p>' + saying.indexOf('th') + '</p>'; //izmet index number no pirma character, vieta kur sakas 'th'
msg += '<h2>last e</h2><p>' + saying.lastIndexOf('e') + '</p>'; //izdot index number no peedeeja 'e' stringaa
msg += '<h2>character index: 8-14</h2><p>' + saying.substring(8,14) + '</p>'; //
msg += '<h2>replace</h2><p>' + saying.replace('Bat', 'Spider') + '</p>'; //aizvieto Bat ar Spider
msg += '<h2>split</h2><p>' + saying.split(' ') + '</p>'; //sadala stringu ar atstarpem
msg += '<h2>trim</h2><p>' + saying.trim() + '</p>'; //removes white space from first and last character

var el = document.getElementById('infoString');
el.innerHTML = msg;
