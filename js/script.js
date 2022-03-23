function computerPlay() {
    
    let randomNum = Math.floor(Math.random() * 3) + 1;

    switch (randomNum) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection.toUpperCase() === "ROCK") {
		if (computerSelection == "Rock") {
			return "It's a Tie!";
		}
		else if (computerSelection == "Paper") {
			return "You Lose! Paper beats Rock";
		}
		else if (computerSelection == "Scissors") {
			return "You Win! Rock beats Scissors";
		}
	}
    else if (playerSelection.toUpperCase() === "PAPER") {
        if (computerSelection == "Rock") {
			return "You Win! Paper beats Rock";
		}
		else if (computerSelection == "Paper") {
			return "It's a Tie!";
		}
		else if (computerSelection == "Scissors") {
			return "You Lose! Scissors beats Paper";
		}
    }
    else if (playerSelection.toUpperCase() === "SCISSORS") {
        if (computerSelection == "Rock") {
			return "You Lose! Rock beats Scissors";
		}
		else if (computerSelection == "Paper") {
			return "You Win! Scissors beats Paper";
		}
		else if (computerSelection == "Scissors") {
			return "It's a Tie!";
		}
    }
}