// esercizio mail
var accounts = ["antonio@gmail.com", "marcello@hotmail.com", "luigi@gmail.com"];

var mail = prompt("quale è la tua mail?").toLowerCase();

var mailFound = false;

for (var i = 0; i < accounts.length; i++) {

  var item = accounts[i]

  if (mail == item) {
      mailFound = true;
  }
}

if (mailFound == true) {
  console.log('mail corretta, puoi accedere' );
} else {
  console.log('mail sbagliata');
}
