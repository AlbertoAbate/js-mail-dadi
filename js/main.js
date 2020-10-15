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
// se mail corretta puoi accedere altrimenti no
if (mailFound == true) {
  console.log('mail corretta, puoi accedere' );
} else {
  console.log('mail sbagliata');
}
