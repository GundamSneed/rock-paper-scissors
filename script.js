// This is the code for the rock paper scissors game in console!

function playGame() {

    let humanScore = 0, computerScore = 0;
    
    for (let i = 1; i <= 5; i++) {

    function getComputerChoice() {

        let cnum= Math.random();

        if (cnum < 0.33) {
            let computerChoice = "rock";
            return computerChoice;
        }

        else if (cnum > 0.33 && cnum < 0.67) {
            computerChoice = "paper"
            return computerChoice;
        }

        else {
            computerChoice = "scissors"
            return computerChoice;
        }

    }

    function getHumanChoice() {

        let hnum = prompt("Please enter your choice:");

        let humanChoice = hnum.toLowerCase();

        // console.log(hnum);

        return humanChoice;

    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();


    function playRound(humanChoice, computerChoice) {

        if (computerChoice === humanChoice) {

            console.log("Tie Game!");
        
        } 

        else if (computerChoice === "rock" && humanChoice === "scissors") {

            console.log("Computer wins!");

            computerScore++;

        }

        else if (computerChoice === "rock" && humanChoice === "paper") {

            console.log("You win!");
            humanScore++;

        }

        else if (computerChoice === "paper" && humanChoice === "rock") {

            console.log("Computer wins!");
            computerScore++;

        }

        else if (computerChoice === "paper" && humanChoice === "scissors") {

            console.log("You win!");
            humanScore++;

        }

        else if (computerChoice === "scissors" && humanChoice === "paper") {

            console.log("Computer wins!");
            computerScore++;

        }
        
        else {

            console.log("You win!");
            humanScore++;

        }

    console.log("Computer Picks: " + computerSelection);

    }

    playRound(humanSelection, computerSelection);

    console.log("Current Score (Computer v You: " + computerScore + " : " + humanScore);
    
}

}

playGame();


