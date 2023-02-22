// Random generated computer choice
function getComputerChoice () {
    const computerOptions = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random()*computerOptions.length);
    return computerOptions[randomIndex];
}

// Get user choice
function getUserChoice() {
    let userInput = (prompt("Choose Rock, Paper, Scissors")).toLowerCase();
    if (!isValid(userInput)) {
        alert("Not valid, try again!");
        getUserChoice();
    } else {
        return userInput
    };   
};

// Validate user choice
function isValid(userChoice) {
    const validOptions = ["rock", "paper", "scissors"]
    if (validOptions.includes(userChoice)) {
        return true;
    } else {
        return false;
    }
}

getUserChoice()
