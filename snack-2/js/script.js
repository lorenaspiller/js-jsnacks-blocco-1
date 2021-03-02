/*L’utente inserisce due parole in successione, con due
prompt. Il software stampa prima la parola più corta, poi la
parola più lunga.
*/

// 1. L’utente inserisce due parole in successione

var parola1 = prompt("inserisci la prima parola");

var parola2= prompt("inserisci la seconda parola");

// 2. verifico lunghezza parole

if (parola1.length < parola2.length) {
  console.log(parola1 + "" + parola2);
} else if (parola2 < parola1) {
  console.log(parola2 + "" + parola1);
} else {
  console.log("le parole inserite sono lunghe uguali");
}
