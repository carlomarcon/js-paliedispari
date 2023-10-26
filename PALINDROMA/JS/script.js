let word = prompt("Scrivere una parola").toString();
let found = false;
// let reverseName = word.split("");

function palindroma(word) {
  let splitName = word.split("");
  let reverseName = [];

  for (let i = splitName.length - 1; i >= 0; i--) {
    reverseName.push(splitName[i]);
  }

  for (let i = 0; i < splitName.length; i++) {
    if (splitName[i] == reverseName[i]) {
      found = true;
    } else {
      found = false;
      break;
    }
  }
  if (found == true) {
    alert("La sua parola è palindroma");
  } else {
    alert("La sua parola non è palindroma");
  }
}

palindroma(word);
