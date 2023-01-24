function getComputerChoice() {
    // Return random choice of the 3 valid options
    var validChoices = ['rock', 'paper', 'scissors'];
    return validChoices[Math.floor(Math.random() * validChoices.length)];
}

function playRound(playerSelection) {
    computerSelection = getComputerChoice();
    if (playerSelection == computerSelection) {
        updateResults('draw', playerSelection, computerSelection); 
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        updateResults('playerwins', playerSelection, computerSelection)
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        updateResults('computerwins', playerSelection, computerSelection)
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        updateResults('playerwins', playerSelection, computerSelection)
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        updateResults('computerwins', playerSelection, computerSelection)
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        updateResults('playerwins', playerSelection, computerSelection)
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        updateResults('computerwins', playerSelection, computerSelection)
    }
}

function updateResults(winner, playerSelection, computerSelection) {
    choices.textContent = "Player chooses " + playerSelection + " / computer chooses " + computerSelection;
    if (winner == 'computerwins') {
        computerScore++;
        roundwinner.textContent = "Computer wins this round"; 
        results.textContent = "Player Score: " + playerScore + " -- " + "Computer Score: " + computerScore;
    } else if (winner == 'playerwins') {
        playerScore++;
        roundwinner.textContent = "Player wins this round"; 
        results.textContent = "Player Score: " + playerScore + " -- " + "Computer Score: " + computerScore;
    } else {
        roundwinner.textContent = "It's a draw";  
    }
    if (computerScore == 5) { roundwinner.textContent = " Computer was the first to 5!"; computerScore = 0; playerScore = 0; }
    if (playerScore == 5) { roundwinner.textContent = " Player was the first to 5!"; computerScore = 0; playerScore = 0; }

}


const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => { playRound(rock.id) });
paper.addEventListener('click', () => { playRound(paper.id) });
scissors.addEventListener('click', () => { playRound(scissors.id) });

const results = document.querySelector('#results');
const choices = document.querySelector('#choices');
const roundwinner = document.querySelector('#winner');

var playerScore = 0;
var computerScore = 0;
