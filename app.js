var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
var computerChoice = "";
var userGuess = "";
var userGuessArray = [];
var guessLeft = 9;
var win = 0;
var lose = 0;
var randomAlphabet = "";
function score() {
  document.querySelector("#win").innerHTML = win;
  document.querySelector("#lose").innerHTML = lose;
  document.querySelector("#Left").innerHTML = guessLeft;
}
function randomChoice() {
  randomAlphabet = alphabet[Math.floor(Math.random() * alphabet.length)];
}
randomChoice();
console.log(randomAlphabet);
score();

function clear() {
  randomChoice();
  userGuessArray = [];
  guessLeft = 9;
  score();
  console.log(randomAlphabet);
}

document.addEventListener("keydown", function(event) {
  if (alphabet.indexOf(event.key) > -1) {
    userGuess = event.key;

    if (userGuess == randomAlphabet) {
      win++;
      clear();
    } else if (
      userGuessArray.length < 8 &&
      userGuessArray.indexOf(userGuess) === -1
    ) {
      userGuessArray.push(userGuess);

      guessLeft = 9 - userGuessArray.length;
      document.querySelector("#Left").innerHTML = guessLeft;
    } else if (userGuessArray.length >= 8) {
      lose++;
      clear();
    }
  }
  document.querySelector("#GuessesSoFar").innerHTML = userGuessArray;
});
