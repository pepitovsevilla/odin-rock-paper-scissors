function getComputerChoice() {
    var computerOptions = ['Rock', 'Paper', 'Scissors']; 
    const random = Math.floor(Math.random() * computerOptions.length);
    return computerOptions[random];
}

computerSelection = getComputerChoice()

function playRound (computerSelection, playerSelection) {
    computerSelection = computerSelection.toLowerCase()
    playerSelection = playerSelection.toLowerCase()
    console.log(computerSelection)
    console.log(playerSelection)
    switch(true) {
        case computerSelection == playerSelection:
            return "It's a tie.";
            break;
    
        case (computerSelection=="rock") && (playerSelection=="scissors"):
        case (computerSelection=="scissors") && (playerSelection=="paper"):
        case (computerSelection=="paper") && (playerSelection=="rock"):
            return `You Lose! ${computerSelection} beats ${playerSelection}!`;
            break;

        case (playerSelection=="rock") && (computerSelection=="scissors"):
        case (playerSelection=="scissors") && (computerSelection=="paper"):
        case (playerSelection=="paper") && (computerSelection=="rock"):
            return `You Win! ${playerSelection} beats ${computerSelection}!`;
            break;
    }
}

console.log(playRound(getComputerChoice(),"ROCK"))