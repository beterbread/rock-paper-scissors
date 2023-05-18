function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;
  if (choice == 1) { return "rock"; }
  if (choice == 2) { return "paper"; }
  if (choice == 3) { return "scissors"; }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == computerSelection) {
    return -1;
  }
  if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      return 0;
    }
    if (computerSelection == "scissors") {
      return 1;
    }
  }
  if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
        return 0;
    }
    if (computerSelection == "rock") {
      return 1;
    }
  }
  if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      return 0;
    }
    if (computerSelection == "paper") {
      return 1;
    }
  }
}

function game() {
  let userPoints = 0;
  let computerPoints = 0;
  while (userPoints < 5 && computerPoints < 5) {
    let userInput = prompt("Rock, paper or scissors?");
    let score = playRound(userInput, getComputerChoice()); 
    if (score == 1) { 
      console.log("You win the round");
      userPoints++; 
    }
    if (score == 0) { 
      console.log("You lose the round");
      computerPoints++; 
    }
    if (score == 0) { 
      console.log("The round is tied");
    }
  }
  if (userPoints == 5) {
    console.log("You win the match");
  }
  if (computerPoints == 5) {
    console.log("You lose the match");
  }
}