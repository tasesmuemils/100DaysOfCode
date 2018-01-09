var originalNumber = 10.23456;

var msg = '<h2>original number</h2><p>' + originalNumber + '</p>';
msg += '<h2>3 dcimal places</h2><p>' + originalNumber.toFixed(3) + '</p>'; //noapalo skaitlus aiz komata (decimalskaitlus)
msg += '<h2>3 digits</h2>' + originalNumber.toPrecision(3) + '</p>'; //noapalo visu skaitli
msg += '<h2>exponential</h2><p>' + originalNumber.toExponential() + '</p>'; //atgriez stringu


var el = document.getElementById('infoNumber');
el.innerHTML = msg;
