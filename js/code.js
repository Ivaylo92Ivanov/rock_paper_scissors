// Random generated computer choice
function getComputerChoice () {
    const computerOptions = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random()*computerOptions.length);
    return computerOptions[randomIndex];
};

// Round Play
function playRound(userChoice) {
    let computerChoice = getComputerChoice();
    const para = document.querySelector("#score-text")
    
    if (userChoice === computerChoice) {
        para.textContent = (`Draw! ${userChoice} = ${computerChoice}. Play again!`)
        return playRound(userChoice);

    } else if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            para.textContent = "You win! Rock beats scissors!";
            userWins += 1;
        } else if (computerChoice === "paper") {
            para.textContent = "Computer wins! Paper beats rock!";
            computerWins += 1;
        };

    } else if (userChoice === "scissors") {
        if (computerChoice === "paper") {
            para.textContent = "You win! Scissors beat paper!";
            userWins += 1;
        } else if (computerChoice === "rock") {
            para.textContent = "Computer wins! Rock beats scissors!";
            computerWins += 1;
        };

    } else if (userChoice === "paper") {
        if (computerChoice === "rock") {
            para.textContent = "You win! Paper beats rock!";
            userWins += 1;
        } else if (computerChoice === "scissors") {
            para.textContent = "Computer wins! Scissors beat paper!";
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



