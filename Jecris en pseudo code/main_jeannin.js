// Algorythme de permutation

let a = 1;
let b = 8;
let temps = "";

// Stuctures itératives
// 1 - L'Algorythme d'Euclide du calcul PGCD

function pgcd(a, b) {
  let r;
  while (b !== 0) {
    r = a % b;
    a = b;
    b = r;
  }
  return a;
}
console.log(pgcd(54, 24)); // Affiche 6
console.log(pgcd(1071, 462)); // Affiche 21
console.log(pgcd(14, 28)); // Affiche 14

// 2 - Le roi, le jeu d'échec et les grains de riz

function nombreDeGrains() {
  let total = 0;
  let grains = 1;
  for (let i = 1; i <= 64; i++) {
    total += grains;
    grains *= 2;
  }
  return total;
}
console.log(nombreDeGrains()); // Affiche 18 446 744 073 709 551 615

// Manipuler les tableaux
// 1 - permet la saisie des notes de 10 élèves

// On crée un tableau pour stocker les notes des élèves
let notes = [];

// On crée une fonction pour saisir les notes des élèves
function saisirNotes() {
  for (let i = 0; i < 10; i++) {
    let note = prompt("Entrez la note de l'élève " + (i + 1) + " :");
    notes.push(parseFloat(note));
  }
}

// On appelle la fonction pour saisir les notes
saisirNotes();

// On définit les coefficients pour chaque matière
let coeffFrancais = 2;
let coeffMaths = 3;
let coeffHistoire = 1;

// On calcule la moyenne pondérée pour chaque élève
let moyennes = [];
for (let i = 0; i < 10; i++) {
  let moyenne =
    (notes[i * 3] * coeffFrancais +
      notes[i * 3 + 1] * coeffMaths +
      notes[i * 3 + 2] * coeffHistoire) /
    (coeffFrancais + coeffMaths + coeffHistoire);
  moyennes.push(moyenne);
}

// On affiche les moyennes pondérées pour chaque élève
for (let i = 0; i < 10; i++) {
  console.log("Moyenne de l'élève " + (i + 1) + " : " + moyennes[i]);
}

// 2 - Le tri à bulles ou tri par propagation

// 3 - Le tri par sélection
