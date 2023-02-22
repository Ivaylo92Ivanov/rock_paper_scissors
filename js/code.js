// Random generated computer choice
function getComputerChoice () {
    const computerOptions = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random()*computerOptions.length);
    return computerOptions[randomIndex];
}

// Get user choice
function getUserChoice() {
    let userInput = (prompt("Choose Rock, Paper, Scissors")).toLowerCase();
    return userInput;
}

