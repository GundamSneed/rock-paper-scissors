// This is the code for the rock paper scissors game in console!

function getComputerChoice() {

    let cnum= Math.random();

    if (cnum < 0.33) {
        return "rock";

    }

    else if (cnum > 0.33 && cnum < 0.67) {
        return "paper"
    }

    else {
        return "scissors"
    }

}

function getHumanChoice() {

    let hnum = prompt("Please enter your choice");

    let humanChoice = hnum.toLowerCase();

    console.log(hnum);

    return hnum;

}

let humanScore = 0, computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if (getComputerChoice() === getHumanChoice()) {

        console.log("Tie Game!");
    } 

    else if (getComputerChoice() === "rock" && getHumanChoice() === "scissors") {

        console.log("Computer wins!");

    }

    else if (getComputerChoice() === "rock" && getHumanChoice() === "paper") {

        console.log("You win!");

    }

    else if (getComputerChoice() === "paper" && getHumanChoice() === "rock") {

        console.log("Computer wins!")
    }


}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


console.log("Computer Picks: " + getComputerChoice());