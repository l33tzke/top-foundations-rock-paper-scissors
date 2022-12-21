function getComputerChoice() {
    let selection = Math.floor(Math.random() * 3)
    if (selection == 1) {
        return "rock"
    } else if (selection == 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

function checkValidInput(input) {
    return input == "rock" ? true
            : input == "paper" ? true
            : input == "scissors" ? true
            : false;
}

function getPlayerChoice() {
    let isValidChoice = false
    let playerChoice;
    while (!isValidChoice) {
        playerChoice = prompt("Rock, paper or scissors? Choose carefully!").toLowerCase().trim();
        isValidChoice = checkValidInput(playerChoice);
    }
    return playerChoice;
}

function showPlayerWinsMsg() {
    console.log("Congratulations, you won!");
}

function showComputerWinsMsg() {
    console.log("You lost, better luck next time!");
}

function showDrawGameMsg() {
    console.log("It's a draw!");
}

function getWinner(computerChoice, playerChoice) {
    switch (computerChoice) {
        case "rock":
            if (playerChoice == "rock") {
                return "draw";
                
            } else if (playerChoice == "paper") {
                return "player";
            }
            else {
                return "computer"; 
            }
        case "paper":
            if (playerChoice == "rock") {
                return "computer";
            } else if (playerChoice == "paper") {
                return "draw";
            }
            else {
                return "player";
            }
        case "scissors":
            if (playerChoice == "rock") {
                return "player";
            } else if (playerChoice == "paper") {
                return "computer";
            }
            else {
                return "draw";
            }
    }
}

function playRound(computerChoice, playerChoice) {
    console.log(`Player choice: ${playerChoice}`);
    console.log(`Computer choice: ${computerChoice}`);
    let winner = getWinner(computerChoice, playerChoice);
    switch (winner) {
        case "player":
            showPlayerWinsMsg();
            break;
        case "computer":
            showComputerWinsMsg();
            break;
        case "draw":
            showDrawGameMsg();
            break;
    }
    return winner;
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    let draws = 0;
    let numberOfRounds = 5;
    for (let i = 0; i < numberOfRounds; i++) {
        console.log(`Round ${(i+1)}:`);
        let winner = playRound(getComputerChoice(), getPlayerChoice());
        if (winner == "computer") {
            computerWins++;
        } else if (winner == "player") {
            playerWins++;
        } else {
            draws++;
        }
    }
    console.log(`Game ended after ${numberOfRounds} rounds.`);
    console.log(`Player wins: ${playerWins}.`);
    console.log(`Computer wins: ${computerWins}.`);
    console.log(`Draws: ${draws}.`);
}

game();