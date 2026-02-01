let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  number = Math.floor(Math.random() * 3 + 1);

  if (number === 1) {
    return "rock";
  } else if (number === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("What is your choice? Paper, rock or scissors?");
  return choice.toLowerCase();
}

function playRound(computerChoice, humanChoice) {
  console.log(`Your choice: ${humanChoice}`);
  console.log(`Computer choice: ${computerChoice}`);
  if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      console.log("You win");
      humanScore += 1;
    } else if (computerChoice === "rock") {
      console.log("Remis");
    } else {
      console.log("You loose");
      computerScore += 1;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      console.log("You win!");
      humanScore += 1;
    } else if (computerChoice === "paper") {
      console.log("Remis");
    } else {
      console.log("You loose");
      computerScore += 1;
    }
  } else {
    if (computerChoice === "paper") {
      console.log("You win!");
      humanScore += 1;
    } else if (computerChoice === "scissors") {
      console.log("Remis");
    } else {
      console.log("You loose");
      computerScore += 1;
    }
  }
  console.log(`Your score: ${humanScore}`);
  console.log(`Computer score: ${computerScore}`);
}

const first = document.querySelector(".btn-rock");
const second = document.querySelector(".btn-paper");
const third = document.querySelector(".btn-scissors");
const scoreWall = document.querySelector("div");

function handleClick(humanChoice) {
  if (humanScore === 5) {
    scoreWall.innerText = `Your score: ${humanScore}, Computer score:${computerScore}\nYou win with computer!`;
  } else if (computerScore === 5) {
    scoreWall.innerText = `Your score: ${humanScore}, Computer score:${computerScore}\nYou lose with computer!`;
  } else {
    const computerChoice = getComputerChoice();
    playRound(computerChoice, humanChoice);
    scoreWall.innerText = `Your score: ${humanScore}, Computer score:${computerScore}`;
  }
}

first.addEventListener("click", () => handleClick("rock"));
second.addEventListener("click", () => handleClick("paper"));
third.addEventListener("click", () => handleClick("scissors"));``