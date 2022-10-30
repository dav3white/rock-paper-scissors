function getComputerChoice() {
    // Return random choice of the 3 valid options
    var validChoices = ['Rock', 'Paper', 'Scissors'];
    return validChoices[Math.floor(Math.random() * validChoices.length)];
}

function playRound(playerSelection, computerSelection) {
    
    // Returns winner of round

    switch (playerSelection) {
        case "ROCK":
            if (computerSelection == "ROCK") {
                return "Draw";
            } else if (computerSelection == "PAPER") {
                return "Computer";
            } else return "Player";
        case "PAPER":
            if (computerSelection == "PAPER") {
                return "Draw";
            } else if (computerSelection == "SCISSORS") {
                return "Computer";
            } else return "Player";
       case "SCISSORS":
            if (computerSelection == "SCISSORS") {
                return "Draw";
            } else if (computerSelection == "ROCK") {
                return "Computer";
            } else return "Player";        
        default:
            return "Invalid Input"
    }
}

function game() {

    var playerScore = 0;
    var computerScore = 0;

    for (let i = 1; i <= 5; i++) {

        console.log("Round: ", i);
        playerSelection = prompt("Enter Player Choice");
        computerSelection = getComputerChoice();
    
        // Convert input to upper case
        playerSelection = playerSelection.toUpperCase();
        computerSelection = computerSelection.toUpperCase();        

        // Show player choices
        console.log("Player: ", playerSelection, " // Computer: ",computerSelection);

        let roundWinner = playRound(playerSelection, computerSelection);

        // Adjust scores if necessary
        switch (roundWinner) {
            case "Player": {
                playerScore += 1;
                console.log("Player wins round ", i);
                console.log("Player: ", playerScore, " // ", "Computer: ", computerScore)
                console.log('\n');
                break;
            }
            case "Computer": {
                computerScore += 1;
                console.log("Computer wins round ", i);
                console.log("Player: ", playerScore, " // ", "Computer: ", computerScore)
                console.log('\n');
                break;
            }
            case "Draw": {
                i--;
                console.log("This round was a draw");
                console.log("Player: ", playerScore, " // ", "Computer: ", computerScore)
                console.log('\n');
                break;
            }
            default: {
                i--;
                console.log("Invalid Input");
                console.log('\n');
            }
        }
    }
    if (playerScore == computerScore) {
        console.log("It's a draw!");
    } else if (playerScore < computerScore) {
        console.log("Player Loses!");
    } else console.log("Player Wins!");
}
game();


