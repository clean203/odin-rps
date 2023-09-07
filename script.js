// const prompt = require("prompt-sync")({ sigint: true });

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  playerLowerCase = playerSelection.toLowerCase();
  computerLowerCase = computerSelection.toLowerCase();
  if (
    (playerLowerCase == "rock" && computerLowerCase == "paper") ||
    (playerLowerCase == "scissors" && computerLowerCase == "rock") ||
    (playerLowerCase == "paper" && computerLowerCase == "scissors")
  ) {
    computerScore++;
    return "You lose this battle";
  } else if (
    (playerLowerCase == "paper" && computerLowerCase == "rock") ||
    (playerLowerCase == "rock" && computerLowerCase == "scissors") ||
    (playerLowerCase == "scissors" && computerLowerCase == "paper")
  ) {
    playerScore++;
    return "You win this battle!";
  } else {
    return "'Tis a Draw!";
  }
}
let result = document.createElement("div");
document.body.appendChild(result);

let p1 = document.createElement("p");
p1.classList.add("line1");
result.appendChild(p1);

let p2 = document.createElement("p");
p2.classList.add("line2");
result.appendChild(p2);

let p3 = document.createElement("p");
p3.classList.add("line3");
result.appendChild(p3);

let p4 = document.createElement("p");
p4.classList.add("line4");
result.appendChild(p4);

p1.textContent = `Player score - Computer score `;
p2.textContent = `${playerScore} - ${computerScore}`;

let rel = () => {
  let computerSelection = getComputerChoice();
  let textResult = playRound("rock", computerSelection);
  resultUpdate(textResult);
  checkScore(playerScore, computerScore);
};

let pel = () => {
  let computerSelection = getComputerChoice();
  let textResult = playRound("paper", computerSelection);
  resultUpdate(textResult);
  checkScore(playerScore, computerScore);
};

let sel = () => {
  let computerSelection = getComputerChoice();
  let textResult = playRound("scissors", computerSelection);
  resultUpdate(textResult);
  checkScore(playerScore, computerScore);
};

const btnRock = document.querySelector("#rock");
btnRock.addEventListener("click", rel);

const btnPaper = document.querySelector("#paper");
btnPaper.addEventListener("click", pel);

const btnScissors = document.querySelector("#scissors");
btnScissors.addEventListener("click", sel);

function resultUpdate(textResult) {
  p2.textContent = `${playerScore} - ${computerScore}`;
  p3.textContent = `${textResult}`;
}

function checkScore(playerScore, computerScore) {
  if (playerScore == 5) {
    p3.remove();
    p4.textContent = "You win this war!!";
    btnRock.removeEventListener("click", rel);
    btnPaper.removeEventListener("click", pel);
    btnScissors.removeEventListener("click", sel);
  } else if (computerScore == 5) {
    p3.remove();
    p4.textContent = "You lose this war";
    btnRock.removeEventListener("click", rel);
    btnPaper.removeEventListener("click", pel);
    btnScissors.removeEventListener("click", sel);
  } else {
    //do nothing
  }
}
