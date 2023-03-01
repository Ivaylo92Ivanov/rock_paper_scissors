// Random generated computer choice
function getComputerChoice () {
    const computerOptions = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random()*computerOptions.length);
    return computerOptions[randomIndex];
};

// Round Play
function playRound(userChoice) {
    let computerChoice = getComputerChoice();
    updateImages(userChoice, computerChoice);
    const para = document.querySelector("#score-text");
    
    if (userChoice === computerChoice) {
        para.textContent = (`Draw! ${userChoice} = ${computerChoice}. Play again!`)
        return playRound(userChoice);

    } else if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            para.textContent = "You win! Rock beats Scissors!";
            userWins += 1;
        } else if (computerChoice === "paper") {
            para.textContent = "Computer wins! Paper beats Rock!";
            computerWins += 1;
        };

    } else if (userChoice === "scissors") {
        if (computerChoice === "paper") {
            para.textContent = "You win! Scissors beat Paper!";
            userWins += 1;
        } else if (computerChoice === "rock") {
            para.textContent = "Computer wins! Rock beats Scissors!";
            computerWins += 1;
        };

    } else if (userChoice === "paper") {
        if (computerChoice === "rock") {
            para.textContent = "You win! Paper beats Rock!";
            userWins += 1;
            
        } else if (computerChoice === "scissors") {
            para.textContent = "Computer wins! Scissors beat Paper!";
            computerWins += 1;
        };  
    };
    updateResult(userWins, computerWins);
    checkForWinner(userWins, computerWins);
};

function updateImages(userChoice, computerChoice) {
    userChoicePic = document.querySelector(".user-display");
    image.src = `images/${userChoice}.png`;
    userChoicePic.appendChild(image);

    computerChoicePic = document.querySelector(".computer-display");
    image2.src = `images/${computerChoice}.png`;
    computerChoicePic.appendChild(image2);
}

function updateResult(userWins, computerWins) {
    const currentScore = document.querySelector("#current-score");
    currentScore.textContent = `Player ${userWins} : Computer ${computerWins}`;
}

function checkForWinner(userWins, computerWins) {
    if (userWins >= 5) {
        const currentScore = document.querySelector("#score-text");
        currentScore.textContent = "You win! Computer is a loser! Reload page to play again!";
    };
    if (computerWins >= 5) {
        const currentScore = document.querySelector("#score-text");
        currentScore.textContent = "Computer wins! You are a loser! Reload page to play again!";
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


let userChoicePic = document.querySelector(".user-display");
let image = new Image(300, 300);
image.src = "images/pattern.png";
userChoicePic.appendChild(image);

let computerChoicePic = document.querySelector(".computer-display");
let image2 = new Image(300, 300);
image2.src = "images/pattern.png";
computerChoicePic.appendChild(image2);


