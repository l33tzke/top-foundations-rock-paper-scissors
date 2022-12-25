let playerWins = 0;
let computerWins = 0;
let draws = 0;
let targetWins = 5;
let currentRound = 0;
let inProgress = true;

function setup() {
    document.querySelector('.targetWins').innerText = targetWins;
    document.querySelector('.player-wins').innerText  = 0;
    document.querySelector('.computer-wins').innerText = 0;
    document.querySelector('.draws').innerText = 0;
}

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

function playerPlays(move) {
    playRound(getComputerChoice(), move);
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

function updateScoreboard(winner) {
    switch (winner) {
        case "player":
            playerWins++;
            document.querySelector('.player-wins').innerText = playerWins;
            break;
        case "computer":
            computerWins++
            document.querySelector('.computer-wins').innerText = computerWins;
            break;
        case "draw":
            draws++;
            document.querySelector('.draws').innerText = draws;
            break;
    }
}

function updateResultText(winner) {
    let resultField = document.querySelector('#result');
    switch (winner) {
        case "player":
            resultField.innerText = "You won the round!";
            break;
        case "computer":
            resultField.innerText = "Computer won the round!";
            break;
        case "draw":
            resultField.innerText = "It's a draw!";
            break;
    }
}

function updatePlayerMove(playerChoice) {
    document.querySelector('#player-move').innerText = playerChoice;
}

function updateComputerMove(computerChoice) {
    document.querySelector('#computer-move').innerText = computerChoice;
}

function checkWinCondition() {
    let finalResultField = document.querySelector('#final-result')
    if (playerWins > 4) { // player won the match
        inProgress = false;
        finalResultField.innerText = "Congratulations, you won the match!"
    } 
    else if (computerWins > 4) { // computer won the match
        inProgress = false;
        finalResultField.innerText = "Computer wins the match. Better luck next time."
    }
}

function playRound(computerChoice, playerChoice) {
    if (inProgress) {
        updatePlayerMove(playerChoice);
        updateComputerMove(computerChoice);
        let winner = getWinner(computerChoice, playerChoice);
        updateScoreboard(winner);
        updateResultText(winner);
        currentRound++;
    }
    checkWinCondition();

}

let buttons = document.querySelectorAll('button');
buttons.forEach(
    button => button.addEventListener("click", function() {
        playerPlays(button.id);
    })
);

setup();