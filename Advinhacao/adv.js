const targetNumber = Math.floor(Math.random() * 100) + 1;
    
let attempts = 0;

function guessNumber() {
  const guessInput = document.getElementById("guessInput");
  const hint = document.getElementById("dica");
  const attemptsDisplay = document.getElementById("tentativas");

  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    hint.textContent = "Digite um número válido entre 1 e 100.";
  } else {
    attempts++;

    if (userGuess === targetNumber) {
      hint.textContent = `Parabéns!!! Você acertou o número ${targetNumber} em ${attempts} tentativas.`;
      attemptsDisplay.textContent = "";
    } else {
      hint.textContent = userGuess < targetNumber ? "Que tal um número maior?" : "Que tal um número menor?";
      attemptsDisplay.textContent = `Tentativas: ${attempts}`;
    }
  }

  guessInput.value = "";
}
