function getComputerChoice() {
    var computerOptions = ['Rock', 'Paper', 'Scissors']; 
    const random = Math.floor(Math.random() * computerOptions.length);
    return computerOptions[random];
}

function playRound (computerSelection, playerSelection) {
 
    computerSelection = computerSelection.toLowerCase()
    playerSelection = playerSelection.toLowerCase()
    // display what the computer chose and what the player chose
    console.log(`Computer chose: ${computerSelection}`)
    console.log(`Player chose: ${playerSelection}`)

    // check who wins the round
    switch(true) {
        case computerSelection == playerSelection:
            return "It's a tie.";
            break;
    
        case (computerSelection=="rock") && (playerSelection=="scissors"):
        case (computerSelection=="scissors") && (playerSelection=="paper"):
        case (computerSelection=="paper") && (playerSelection=="rock"):
            return `You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}!`;
            break;

        case (playerSelection=="rock") && (computerSelection=="scissors"):
        case (playerSelection=="scissors") && (computerSelection=="paper"):
        case (playerSelection=="paper") && (computerSelection=="rock"):
            return `You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}!`;
            break;
    }
}


function game() {
    let playerScore = 0;
    let computerScore = 0;

    // play 5 rounds
    for (let i = 0; i < 5; i++) {

        let playerChoice = prompt("Rock, Paper, Scissors?")
        let computerChoice = getComputerChoice();
        
        let result = (playRound(playerChoice,computerChoice)); 
        console.log(result)

        switch(true) {

            case result == "It's a tie.":
                break
            
            case result.slice(0,7) == `You Win`:
                // tally score after each round
                playerScore = playerScore + 1;
                break
            
            case result.slice(0,8) == `You Lose`:
                // tally score after each round
                computerScore = computerScore + 1;
                break

        }

        // show the running score
        console.log(`Player: ${playerScore} | Computer: ${computerScore}`)


    }

    // announce winner after 5 rounds
    switch(true) {
        case playerScore > computerScore:
            console.log("You win the game!");
            break;
        case playerScore > computerScore:
            console.log("The computer wins the game!");
            break;
        case playerScore == computerScore:
            console.log("The game ends in a draw!");
            break;
    }
}

game()