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

// Game
function play() {
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();
    console.log(`Player choice: ${userChoice}`);
    console.log(`Computer choice: ${computerChoice}`);
    if (userChoice === computerChoice) {
        alert("Draw! Play again");
        console.log(`Draw! ${userChoice} = ${computerChoice}`)
        return play();
    } else if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            console.log("You win! Rock beats scissors!");
        } else if (computerChoice === "paper") {
            console.log("Computer wins! Paper beats rock!");
        };
    } else if (userChoice === "scissors") {
        if (computerChoice === "paper") {
            console.log("You win! Scissors beat paper!");
        } else if (computerChoice === "rock") {
            console.log("Computer wins! Rock beats scissors!");
        };
    } else if (userChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats rock!");
        } else if (computerChoice === "scissors") {
            console.log("Computer wins! Scissors beat paper!");
        };  
    };
}


isTrue = true;
while (isTrue) {
    play();
}

