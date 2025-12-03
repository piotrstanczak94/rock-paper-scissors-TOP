function getComputerChoice() {
  number = Math.floor(Math.random() * 3 + 1);
  if (number === 1) {
    console.log("Rock");
  } else if (number === 2) {
    console.log("Paper");
  } else {
    console.log("Scissors");
  }
}

function getHumanChoice(choice) {}
