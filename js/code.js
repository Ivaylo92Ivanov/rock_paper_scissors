// Random generated computer choice
function getComputerChoice () {
    const computerOptions = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random()*computerOptions.length);
    return computerOptions[randomIndex];
};

// Get user choice
function getUserChoice() {
    let userInput = (prompt("Choose Rock, Paper, Scissors")).toLowerCase();
    if (!isValid(userInput)) {
        alert("Not valid, try again!");
        return getUserChoice();
    } else {
        return userInput;
    };   
};

// Validate user choice
function isValid(userChoice) {
    const validOptions = ["rock", "paper", "scissors"];
    if (validOptions.includes(userChoice)) {
        return true;
    } else {
        return false;
    }
};

// Round Play
function playRound() {
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();
    if (userChoice === computerChoice) {
        alert(`Draw! ${userChoice} = ${computerChoice}. Play again!`)
        return playRound();

    } else if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            alert("You win! Rock beats scissors!");
        } else if (computerChoice === "paper") {
            alert("Computer wins! Paper beats rock!");
        };

    } else if (userChoice === "scissors") {
        if (computerChoice === "paper") {
            alert("You win! Scissors beat paper!");
        } else if (computerChoice === "rock") {
            alert("Computer wins! Rock beats scissors!");
        };

    } else if (userChoice === "paper") {
        if (computerChoice === "rock") {
            alert("You win! Paper beats rock!");
        } else if (computerChoice === "scissors") {
            alert("Computer wins! Scissors beat paper!");
        };  
    };
};



