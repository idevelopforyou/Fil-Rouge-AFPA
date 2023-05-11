let variable = "valeur";

//  Déclaration
const tableau = [];

// Assignation
const tab = [1, 2, 3];
const prenoms = ["Georges", "Martine", "Jean", "Bob"];

console.log(tab);
console.log(prenoms);

// Accès aux valeurs du tableau
console.log(prenoms[3]);
prenoms[2] = "James";

console.log(prenoms);

// IndexOf() et lastIndexOf()
let index = tab.indexOf(2);
console.log("index: ", index);
index = prenoms.indexOf("Bob");
console.log("index: ", index);

// length
let taille = prenoms.length;
console.log("taille: ", taille);

// push()
tab.push(15);
tab.push(5);
tab.push(1);
console.log(tab);

// sort()
tab.sort();
console.log(tab);
prenoms.sort();
console.log(prenoms);

// pop()
tab.pop();
console.log(tab);

// concat()
const concatenation = tab.concat(prenoms);
console.log(concatenation);

// split()
let chaine = "Ceci est une chaine de caractères.";
const decoupage = chaine.split("e");
console.log(decoupage);

// Parcourir un tableau
for (let i = 0; i < tab.length; i++) {
  console.log(tab[i]);
}

for (let index in prenoms) {
  console.log(index);
}

for (let prenom of prenoms) {
  console.log(prenom);
}

let somme = tab[0] + tab[1] + tab[2];

// tableau multidimensionel
const tabMulti = [];
tabMulti[0] = tab;
// console.log(tabMulti);
console.log(tab);
console.log(tabMulti);
