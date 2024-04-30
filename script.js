
const buttons = document.querySelectorAll('button');
    let rps = '';
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            rps = button.id;
            playGame();
        });
    });

function getComputerChoice() {
    computerChoice =  Math.floor(Math.random() * 3);
    return computerChoice == 0 ? 'Rock' : computerChoice == 1 ? 'Paper' : 'Scissors';
}

function getPlayerSelection() {
    let playerSelection = rps;
    choice = playerSelection.localeCompare("Rock", 'en', { sensitivity: 'base' }) == 0 ? 'Rock' : 
             playerSelection.localeCompare("Paper", 'en', { sensitivity: 'base' }) == 0 ? 'Paper' : 
             playerSelection.localeCompare("Scissors", 'en', { sensitivity: 'base' }) == 0 ? 'Scissors' : 'Go back school Mec !';
    return choice;
}
let playerScore = 0;
let computerScore = 0;

function playGame() {
    
        const playerSelection = getPlayerSelection();
        const computerSelection = getComputerChoice();

        const eQual = 0;
        const wInner = 1;
        const lOoser = 2;
    
        result = playerSelection == 'Rock' ? 
                    (computerSelection == 'Rock' ? eQual : computerSelection == 'Paper' ? lOoser : wInner) : 
                 playerSelection == 'Paper' ? 
                    (computerSelection == 'Rock' ? wInner : computerSelection == 'Paper' ?eQual : lOoser) : 
                    (computerSelection == 'Rock' ? lOoser : computerSelection == 'Paper' ? lOoser : eQual);
        
        result == 0 ? (playerResultu = 0, computerResultu = 0) : result == 1 ? (playerResultu = 1, computerResultu = 0) : (playerResultu = 0, computerResultu = 1);
        playerScore += playerResultu;
        computerScore += computerResultu;

        const deBut = 'With ' + playerSelection + ' on ' + computerSelection +  ' : ';
        const theeQual = 'nobody win and nobody loose';
        const thewInner = 'YOU WIN BABY !!';
        const thelOoser = 'YOU LOOSE MY POULE !!';
        const round = result;

        resultat = result == 0 ? theeQual : result == 1 ? thewInner : thelOoser;
        match = deBut + resultat + ' (' + round + ')';
        final = (playerScore == 5)  ? "You win !!" : (computerScore == 5) ? "You loose :-(" : 'Player : ' + playerScore + ' / Computer : ' + computerScore;

        const body = document.querySelector("body");

        const displayResult = document.createElement('div');
        body.appendChild(displayResult);
        displayResult.textContent = match;

        const textFinal = document.createElement('p');
        body.appendChild(textFinal);
        textFinal.textContent = final;
}