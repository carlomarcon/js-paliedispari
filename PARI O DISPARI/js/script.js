let userNumber = parseInt(prompt("Scrivere numero da 1 a 5"));
let computerNumber;
// let sumNumber = userNumber + computerNumber;

function generatorNumber() {
  let randomNumber = Math.floor(Math.random() * (5 - 1 + 1) + 1);
  computerNumber = parseInt(randomNumber);
  return computerNumber;
}

generatorNumber();

console.log(computerNumber);
let sumNumber = parseInt(userNumber + computerNumber);
console.log(sumNumber);

if (isNaN(userNumber)) {
  alert("Solo numeri !");
  location.reload();
} else if (sumNumber % 2 == 0) {
  alert("la somma dei due numeri è " + sumNumber + ",quindi è pari");
} else {
  alert = "la somma dei due numeri è " + sumNumber + ",quindi è dispari";
}

if (computerNumber == userNumber) {
  alert("Avete fatto pari, riprovare !");
  location.reload;
} else if (computerNumber > userNumber) {
  alert("Mi dispiace hai perso..Il computer ha un numero più alto");
} else if (computerNumber < userNumber) {
  alert("complimenti hai battuto il computer");
}
