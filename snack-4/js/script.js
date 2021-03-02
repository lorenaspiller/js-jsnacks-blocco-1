/*
In un array sono contenuti i nomi degli invitati alla festa del
grande Inzaghi, chiedi all’utente il suo nome e comunicagli se
può partecipare o no alla festa.
*/

var invitati = ["Mario", "Lucia", "Carlo", "Andrea", "Sara"]

var nomeUtente = prompt("inserisci il tuo nome per verificare se puoi accedere");

var accesso = false;

for (var i = 0; i < invitati.length; i++) {
  if (nomeUtente.toLowerCase() == invitati[i].toLowerCase()) {
    var accesso = true;
  }
}

if (accesso == true) {
  console.log("puoi partecipare");
} else {
  console.log("non puoi partecipare");
}
