function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;
  if (choice === 1) { return "rock"; }
  if (choice === 2) { return "paper"; }
  if (choice === 3) { return "scissors"; }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return -1;
  }
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return 0;
    }
    if (computerSelection === "scissors") {
      return 1;
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
        return 0;
    }
    if (computerSelection === "rock") {
      return 1;
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return 0;
    }
    if (computerSelection === "paper") {
      return 1;
    }
  }
}

// function game() {
//   let userPoints = 0;
//   let computerPoints = 0;
//   while (userPoints < 5 && computerPoints < 5) {
//     let userInput = prompt("Rock, paper or scissors?");
//     let score = playRound(userInput, getComputerChoice()); 
//     if (score == 1) { 
//       console.log("You win the round");
//       userPoints++; 
//     }
//     if (score == 0) { 
//       console.log("You lose the round");
//       computerPoints++; 
//     }
//     if (score == -1) { 
//       console.log("The round is tied");
//     }
//   }
//   if (userPoints == 5) {
//     console.log("You win the match");
//   }
//   if (computerPoints == 5) {
//     console.log("You lose the match");
//   }
// }

function playAgain(num) {
  const winner = document.querySelector('.winner');
  if (num === 1) {
    winner.textContent = "You won :D"
  }
  if (num === 0) {
    winner.textContent = "You lose :("
  }
  const popup = document.querySelector('.popup');
  popup.style.display = "block";
}

function closePopUp() {
  const popup = document.querySelector('.popup');
  popup.style.display = "none";  
}

const buttons = document.querySelectorAll('input');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let userInput = button.getAttribute('alt');
    let compChoice = getComputerChoice();
    let score = playRound(userInput, compChoice);
    if (score === 1) { 
      const score = document.querySelector('.human-score');
      let str = score.textContent;
      let num = Number(str) + 1;
      if (num === 5) {
        playAgain(1); //1 indicates that bot won
      }
      score.textContent = num;
    }
    if (score === 0) { 
      const score = document.querySelector('.bot-score');
      let str = score.textContent;
      let num = Number(str) + 1;
      if (num === 5) {
        playAgain(0); //0 indicates that bot won
      }
      score.textContent = num;
    }
    let humanChoice = document.querySelector('.human-choice');
    let botChoice = document.querySelector('.bot-choice');
    humanChoice.textContent = userInput;
    botChoice.textContent = compChoice;
  });
});

const playAgainBtn = document.querySelector('.play-again');
playAgainBtn.addEventListener('click', () => {
  const humanScore = document.querySelector('.human-score');
  const botScore = document.querySelector('.bot-score');
  humanScore.textContent = "0"; //reset scores
  botScore.textContent = "0";
  let humanChoice = document.querySelector('.human-choice');
  let botChoice = document.querySelector('.bot-choice');
  humanChoice.textContent = "?"; //reset choice text
  botChoice.textContent = "?";
  closePopUp();
});