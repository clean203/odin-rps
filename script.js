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
    console.log("You lose!");
    computerScore++;
  } else if (
    (playerLowerCase == "paper" && computerLowerCase == "rock") ||
    (playerLowerCase == "rock" && computerLowerCase == "scissors") ||
    (playerLowerCase == "scissors" && computerLowerCase == "paper")
  ) {
    console.log("You win!");
    playerScore++;
  } else {
    console.log("Draw!");
  }
}

const btnRock = document.querySelector("#rock");
btnRock.addEventListener("click", () => {
  let computerSelection = getComputerChoice();
  playRound("rock", computerSelection);
});

const btnPaper = document.querySelector("#paper");
btnPaper.addEventListener("click", () => {
  let computerSelection = getComputerChoice();
  playRound("paper", computerSelection);
});

const btnScissors = document.querySelector("#scissors");
btnScissors.addEventListener("click", () => {
  let computerSelection = getComputerChoice();
  playRound("scissors", computerSelection);
});

// function game() {
//   let playerSelection = prompt("Choose your hand ");
//   let computerSelection = getComputerChoice();
//   playRound(playerSelection, computerSelection);
//   if (playerScore > computerScore) {
//     console.log("You win this round :)");
//   } else if (computerScore > playerScore) {
//     console.log("You lose this round :(");
//   } else {
//     console.log("This round is a draw :|");
//   }
//   console.log("Final scores:");
//   console.log(`Player score: ${playerScore}`);
//   console.log(`Computer score: ${computerScore}`);
// }

// game();
