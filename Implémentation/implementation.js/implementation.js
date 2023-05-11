var test = 10;
console.log(test);

// Déclarations de Variables

// Avec -`var`-, la portée de la valeur est globale.

// Avec -`let`-, la portée de la variable est local à son bloc d'instruction.

// Avec -`const`-, la valeur ne change pas.

// maFonction = camel case
// MaFonction = pascal case
// ma_fonction = snake case

// Assignation
maVariable = 120;
variable2 = "Hello";
let teste = true;

//Opération ( +, -, *, /)
let a = 3;
let b = 15;
let c = a + b;
console.log(c);

let boolA = true;
let boolB = false;
let boolC = boolA && boolB;
console.log(boolC);

let message1 = "Hello";
let message2 = "World";

// la concaténation
let message3 = message1 + " " + message2;
console.log(message3);

// A quelle indice ce trouve le caractère `o`
let index = message3.indexOf("o");
console.log(index);

// Conditions
let age = 15;

if (age >= 18) {
  console.log("Vous êtes majeur");
} else {
  console.log("Vous êtes mineur");
}

// Le switch statement pour verifier l'égalité
age = 4;

switch (age) {
  case 4:
    console.log("Vous êtes un bébé");
    break;
  case 17:
    console.log("Vous êtes mineur");
    break;
  case 18:
    console.log("vous avez 18 ans");
    break;
  case 21:
    console.log("Vous êtes majeur");
    break;
  default:
    console.log("Votre âge n'exixte pas dans notre base de donnée");
    break;
}

// Boucles (Loops)

//While
let booleen = true;
let compteur = 0;
while (booleen) {
  console.log(compteur);
  compteur++; // compteur = compteur + 1
  // compteur += 5 équivaut à compteur = compteur + 5
  if (compteur >= 10) {
    booleen = false;
    console.log("La boucle est terminéé");
  }
}

//do while
console.log("\n++++ Boucles do...while() ****\n");
compteur = 0;
do {
  console.log(compteur);
  compteur++; //compteur = compteur +1
} while (compteur <= 10);

//for
console.log("\n**** Boucles for() ++++\n");
var i;
for (i = 0; i < 10; i++) {
  console.log(i);
}

// Demande un nombre
// Le nombre est il positif ou négatif ?
let saisieUtilisateur = 0;

// nombre = prompt("Entrez un nombre");

function PositifOuNegatif(nombre1) {
  if (nombre > 0) {
    console.log(nombre + " est positif");
  } else {
    if (nombre == 0) {
      console.log("Votre nombre  est 0");
    } else {
      console.log(nombre + " est négatif");
    }
  }
}
// Fonction
for (var i = 0; i < 3; i++) {
  let saisieUtilisateur = 0;
  let reponseProgramme = "";
  saisieUtilisateur = prompt("Entrez un nombre");
  reponseProgramme = PositifOuNegatif(saisieUtilisateur);
  console.log("Votre nombre est " + reponseProgramme);
}

// Indiquer si le nombre est pair ou impair
// + - * / %
// let nombre = 0;
// nombre = prompt("Saisissez un nombre");
// // console.log(typeof(nombre));
// // let nombre2 = parseInt("toto");
// // console.log(nombre2);
// //console.log(typeof(nombre2));
// if (nombre % 2 == 0) {
//   console.log("Le nombre saisie est pair");
// } else {
//   console.log("Le nombre saisie est impair");
// }
// // 5 % 2 = 1

let nombre;
let nombre1;

do {
  nombre = prompt("Entrez un nombre :");
  nombre1 = parseInt(nombre);
} while (isNaN(nombre1));

if (nombre2 == 0) {
  if (nombre == 0) {
    console.log("nombre pair et nul");
  } else if (nombre < 0) {
    console.log("nombre pair et négatif");
  } else {
    console.log("nombre pair et positif");
  }
} else {
  if (nombre == 0);
  console.log("nombre impair et nul");
}
if (nombre < 0) {
  console.log("nombre impair et négatif");
} else {
  console.log("nombre impair et positif");
}
