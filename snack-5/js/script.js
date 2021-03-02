/*
Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
un numero, se è dispari inseriscilo nell’array.
*/
var numero = [];

for (var i = 0; i < 6; i++) {
  var numeroInserito = (parseInt(prompt("inserisci il numero")));

  if (numeroInserito % 2 == 1) {
    numero.push(numeroInserito);
  }
}

console.log(numero);
