// Random generated computer choice
function getComputerChoice () {
    const computerOptions = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random()*computerOptions.length);
    return computerOptions[randomIndex];
};

// Round Play
function playRound(userChoice) {
    let computerChoice = getComputerChoice();
    if (userChoice === computerChoice) {
        alert(`Draw! ${userChoice} = ${computerChoice}. Play again!`)
        return playRound();

    } else if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            alert("You win! Rock beats scissors!");
            userWins += 1;
        } else if (computerChoice === "paper") {
            alert("Computer wins! Paper beats rock!");
            computerWins += 1;
        };

    } else if (userChoice === "scissors") {
        if (computerChoice === "paper") {
            alert("You win! Scissors beat paper!");
            userWins += 1;
        } else if (computerChoice === "rock") {
            alert("Computer wins! Rock beats scissors!");
            computerWins += 1;
        };

    } else if (userChoice === "paper") {
        if (computerChoice === "rock") {
            alert("You win! Paper beats rock!");
            userWins += 1;
        } else if (computerChoice === "scissors") {
            alert("Computer wins! Scissors beat paper!");
            computerWins += 1;
        };  
    };
};

// Play game of 5
function game() {
    for (let i=0; i<5; i++) {
        
    };
};

userChoice = ""
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => 
    playRound(userChoice = button.id));
    });

let userWins = 0;
let computerWins = 0;

game();



