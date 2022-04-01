let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

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
	let result;

	if (
		(playerSelection === "Rock" && computerSelection === "Scissors") ||
		(playerSelection === "Paper" && computerSelection === "Rock") ||
		(playerSelection === "Scissors" && computerSelection === "Paper")
	) 
	{
		result = `You Win! ${playerSelection} beats ${computerSelection}`;
		playerScore++;
	}
	else if (
		(playerSelection === "Scissors" && computerSelection === "Rock") ||
		(playerSelection === "Rock" && computerSelection === "Paper") ||
		(playerSelection === "Paper" && computerSelection === "Scissors")
	) 
	{
		result = `You Lose! ${computerSelection} beats ${playerSelection}`;
		computerScore++;
	}
	else if (playerSelection === computerSelection) {
		result = "It's a Tie";
	}

	return result;
}

function updateScoreCards(playerScore, computerScore) {
	const cpuScoreCard = document.querySelector('.cpu-score');
	const playerScoreCard = document.querySelector('.player-score');

	cpuScoreCard.textContent = "Computer Score: " + computerScore;
	playerScoreCard.textContent = "Player Score: " + playerScore;
}

function updateSelectionCards(playerSelection, computerSelection) {
	const cpuSelectionCard = document.querySelector('.cpu-selection');
	const playerSelectionCard = document.querySelector('.player-selection');

	cpuSelectionCard.textContent = "Computer Selection: " + computerSelection;
	playerSelectionCard.textContent = "Player Selection: " + playerSelection;
}

// Button event
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
	button.addEventListener('click', () => {
		let playerSelection = button.textContent;
		clickButton(playerSelection);
	});
})

const roundResult = document.querySelector('.round-result');

function clickButton(playerSelection) {
	let computerSelection = computerPlay();
	roundResult.textContent = "Round Result: " + playRound(playerSelection, computerSelection);
	updateSelectionCards(playerSelection, computerSelection);
	updateScoreCards(playerScore, computerScore);
	endGame(playerScore, computerScore);
}

function endGame(playerScore, computerScore) {
	if (playerScore === 5) {
		roundEndMessage.textContent = "You Win The Game!";
		openModal();
	}
	else if (computerScore === 5) {
		roundEndMessage.textContent = "You Lose The Game!";
		openModal();
	}
}

function resetGame() {
	roundResult.textContent = "Round Result: ";
	playerScore = 0;
	computerScore = 0;
	updateSelectionCards("", "");
	updateScoreCards("", "");
}

/* Modal */
const modal = document.querySelector('#myModal');
const closeButton = document.querySelector('.close');
const roundEndMessage = document.querySelector('.round-end-message');
const playAgainBtn = document.querySelector('.play-btn');

// Modal trigger. when the player or computer gets 5 points, open the modal
function openModal() {
	modal.style.display = "block";
}

closeButton.addEventListener('click', () => {
	modal.style.display = "none";
	resetGame();
});

playAgainBtn.addEventListener('click', () => {
	modal.style.display = "none";
	resetGame();
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', (event) => {
	if (event.target == modal) {
		modal.style.display = "none";
		resetGame();
	}
});