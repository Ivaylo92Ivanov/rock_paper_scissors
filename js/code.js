//Random generated computer choice
function getComputerChoice () {
    const computerOptions = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random()*computerOptions.length)
    console.log(computerOptions[randomIndex]);
}

getComputerChoice();