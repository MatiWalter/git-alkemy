/*
var edad;
edad = 34; // tipo number
alert('edad = '+ edad);
edad = 'Pedro' //tipo string
alert('edad = '+ edad);
edad = true //tipo boolean
alert('edad = '+ edad);
edad = 125.6
alert('edad = '+ edad);
*/

var cursantes = ['Marcela','Laura','Francisco','Gonzalo'];
document.getElementById ('contenedor0').innerHTML = '<h2>' + cursantes + '</h2><br>';

cursantes.sort();
document.getElementById ('contenedor1').innerHTML = '<h2>' + cursantes + '</h2><br>';

var primer_elemento = cursantes[0];
document.getElementById ('contenedor2').innerHTML = '<h2>el valor del 1° elemento es ' + primer_elemento + '</h2><br>';

var ultimo_elemento = cursantes[cursantes.length - 1];
document.getElementById ('contenedor3').innerHTML = '<h2>el valor del ulyimo elemento es ' + ultimo_elemento + '</h2><br>';

cursantes.push('jose')
document.getElementById ('contenedor4').innerHTML = '<h2>' + cursantes + '</h2><br>';

cursantes.pop();
document.getElementById ('contenedor5').innerHTML = '<h2>' + cursantes + '</h2><br>';

cursantes.unshift ('jose');
document.getElementById ('contenedor6').innerHTML = '<h2>' + cursantes + '</h2><br>';

cursantes.shift();
document.getElementById ('contenedor7').innerHTML = '<h2>' + cursantes + '</h2><br>';

cursantes.push('ariel');
cursantes.push('juan pablo');
cursantes.push('jose');
cursantes.push('sebastian');
document.getElementById ('contenedor8').innerHTML = '<h2>' + cursantes + '</h2><br>';
