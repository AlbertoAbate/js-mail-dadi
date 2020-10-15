// esercizio mail
var accounts = ["antonio@gmail.com", "marcello@hotmail.com", "luigi@gmail.com"];
// chiediamo la mail
var mail = prompt("quale è la tua mail?").toLowerCase();
// inserimenrto mail sbagliato falsa
var mailFound = false;

for (var i = 0; i < accounts.length; i++) {

  var item = accounts[i]
//  se inserimento mail giusto è vero
  if (mail == item) {
      mailFound = true;
  }
}
var risultato = accounts;
// se mail corretta puoi accedere altrimenti no
if (mailFound == true) {
  console.log('mail corretta, puoi accedere' );
  risultato = "la tua mail è corretta puoi accedere";
} else {
  console.log('mail sbagliata');
  risultato = " la tua mail è sbagliata, accesso negato!"
}
document.getElementById('risultato').innerHTML = risultato;

// esercizio gioco dei dadi
// var giocatore = Math.floor( Math.random() * 6) + 1;
// console.log(giocatore);
// document.getElementById('player').innerHTML = "Il giocatore ha totalizzato " + giocatore;
// var computer = Math.floor( Math.random() * 6) + 1;
// console.log(computer);
// document.getElementById('pc').innerHTML = "Il computer ha totalizzato " + computer;
//
// var risultato = "";
//
// if ( giocatore > computer) {
//   console.log('vince il giocatore');
//   risultato = "giocatore vince";
// }
// else {
//   if ( giocatore < computer) {
//     console.log('vince il computer');
//     risultato = "computer vince";
//   } else {
//     console.log("hai pareggiato");
//     risultato = "avete pareggiato";
//   }
// }
//
// document.getElementById('risultato').innerHTML = risultato;
