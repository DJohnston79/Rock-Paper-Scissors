function getComputerChoice() {
    const myArray=['Rock', 'Paper', 'Scissors'];
    const randomChoice = myArray[Math.floor(Math.random()*myArray.length)];
    console.log(randomChoice);
};
getComputerChoice()

function playRound(playerSelection, computerSelection) {
  const playerSelection = prompt("Choose rock, paper, or scissors!");
  const computerSelection = getComputerChoice();
  
}
 
const playerSelection = prompt("Choose rock, paper, or scissors!");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));



