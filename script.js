let playerName = '';
let playerScore = 0;
let computerScore = 0;
let rounds = 0;

function startGame() {
    playerName = document.getElementById('playerName').value;
    if (playerName.trim() === '') {
        alert('Please enter your name.');
        return;
    }
    document.getElementById('greetings').textContent = `Hello, ${playerName}!`;
    document.getElementById('popup').style.display = 'none';
}

document.getElementById('playerName').addEventListener('keydown',function(event){
    if (event.key==='Enter'){
        startGame();
    }
});

function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissor'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const playerMoveElement = document.getElementById('playerMove');
    const computerMoveElement = document.getElementById('computerMove');
    let resultMessage = '';

    // Display choices
    playerMoveElement.textContent = userChoice;
    computerMoveElement.textContent = computerChoice;


    // Determine the result
    if (userChoice === computerChoice) {
        resultMessage = `It's a tie! You both chose ${userChoice}.`;
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissor') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissor' && computerChoice === 'paper')
    ) {
        resultMessage = `You win! ${userChoice} beats ${computerChoice}.`;
        playerScore++;
    } else {
        resultMessage = `You lose! ${computerChoice} beats ${userChoice}.`;
        computerScore++;
    }

    document.getElementById('resultMessage').textContent = resultMessage;
    updateScores();

    // Check if 5 rounds are completed
    rounds++;
    if (rounds === 5) {
        showFinalResult();
    }
}
function updateScores(){
    document.getElementById('playerScore').textContent = `${playerName}:${playerScore}`;
    document.getElementById('computerScore').textContent = `Computer:${computerScore}`;
}
function showFinalResult(){
    let finalResult = '';
    if(playerScore>computerScore) {
        finalResult =`congtratulation, ${playerName},you won by ${playerScore-computerScore}`;
    }
    else if (playerScore< computerScore){
        finalResult =`try again, ${playerName},you lose by ${computerScore-playerScore}`;
    }
    else {
        finalResult = `it's a tie, Same score`;

    }
    document.getElementById('finalResult').textContent = finalResult;
    document.getElementById('resultBoard').style.display = 'flex';

}
 function resetGame (){
    playerScore = 0;
    computerScore = 0; 
    rounds = 0;
    document.getElementById('resultBoard').style.display = 'none';
    document.getElementById('playerMove').textContent = '';
    document.getElementById('computerMove').textContent = '';
    document.getElementById('resultMessage').textContent = '';

    updateScores();

 }
 function refreshPage(){
    location.reload();
}
   
 

