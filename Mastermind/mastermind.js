const colors = ["1", "2", "3", "4"]; // Définit les couleurs disponibles
const combinationLength = 4; // Définit la longueur de la combinaison

// Génère une combinaison aléatoire
function generateCombination() {
  let combination = "";
  for (let i = 0; i < combinationLength; i++) {
    const randomIndex = Math.floor(Math.random() * colors.length);
    combination += colors[randomIndex];
  }
  return combination;
}

// Compare les propositions avec la combinaison secrète
function compareCombinations(secretCombination, proposedCombination) {
  let correctPositions = 0;
  let correctColors = 0;
  let secretCombinationArray = secretCombination.split("");
  let proposedCombinationArray = proposedCombination.split("");

  // Vérifie les positions correctes
  for (let i = 0; i < combinationLength; i++) {
    if (secretCombinationArray[i] === proposedCombinationArray[i]) {
      correctPositions++;
      secretCombinationArray[i] = null;
      proposedCombinationArray[i] = null;
    }
  }

  // Vérifie les couleurs correctes
  for (let i = 0; i < combinationLength; i++) {
    if (
      proposedCombinationArray[i] !== null &&
      secretCombinationArray.includes(proposedCombinationArray[i])
    ) {
      correctColors++;
      const secretIndex = secretCombinationArray.indexOf(
        proposedCombinationArray[i]
      );
      secretCombinationArray[secretIndex] = null;
      proposedCombinationArray[i] = null;
    }
  }

  return { correctPositions, correctColors };
}

// Joue une partie de Mastermind
function playGame() {
  const secretCombination = generateCombination();
  let attempts = 0;
  let win = false;

  console.log(`La combinaison secrète est : ${secretCombination}`);

  while (attempts < 5 && !win) {
    const proposedCombination = prompt(
      `Proposez une combinaison de ${combinationLength} couleurs (1, 2, 3 ou 4) :`
    );
    if (
      proposedCombination &&
      proposedCombination.length === combinationLength
    ) {
      attempts++;
      const result = compareCombinations(
        secretCombination,
        proposedCombination
      );
      console.log(
        `${result.correctPositions} pions bien placés, ${result.correctColors} pions mal placés`
      );
      if (result.correctPositions === combinationLength) {
        win = true;
      }
    } else {
      alert(
        `Veuillez proposer une combinaison de ${combinationLength} couleurs (1, 2, 3 ou 4)`
      );
    }
  }

  if (win) {
    console.log(
      `Bravo ! Vous avez trouvé la combinaison secrète en ${attempts} coups !`
    );
  } else {
    console.log(
      `Dommage... Vous n'avez pas trouvé la combinaison secrète en ${attempts} coups. La combinaison secrète était ${secretCombination}.`
    );
  }
}

// Lancement du jeu
playGame();
