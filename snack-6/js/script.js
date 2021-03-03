/*
Stampa il cubo dei primi N numeri, dove N è un numero
indicato dall’utente.
*/
do {
  var numero = parseInt(prompt("inserisci numero"));
} while (isNaN(numero));


for (var i = 1; i <= numero; i++) {
  var cubo = Math.pow(i, 3);
  console.log(cubo);
}
