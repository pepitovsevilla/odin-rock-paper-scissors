function getComputerChoice() {
    var computerOptions = ['Rock', 'Paper', 'Scissors']; 
    const random = Math.floor(Math.random() * computerOptions.length);
    return computerOptions[random];
}

console.log(getComputerChoice())