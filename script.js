function getComputerChoice() {
    computerChoice =  Math.floor(Math.random() * 3);
    return computerChoice == 0 ? 'Rock' : computerChoice == 1 ? 'Paper' : 'Scissors';
}

function getPlayerSelection() {
    let playerSelection = prompt("Rock ? Paper ? or Scissors ?");
    choice = playerSelection.localeCompare("Rock", 'en', { sensitivity: 'base' }) == 0 ? 'Rock' : 
             playerSelection.localeCompare("Paper", 'en', { sensitivity: 'base' }) == 0 ? 'Paper' : 
             playerSelection.localeCompare("Scissors", 'en', { sensitivity: 'base' }) == 0 ? 'Scissors' : 'Go back school Mec !';
    return choice;
}

function playGame() {
    let score = 0;
    numberOfRounds = 3;
    for (i=0; i<numberOfRounds; i++) {
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
        
        resultu = result == 0 ? 0 : result == 2 ? 0 : 1;
        score += resultu;

        const deBut = 'With ' + playerSelection + ' on ' + computerSelection +  ' : ';
        const theeQual = 'nobody win and nobody loose';
        const thewInner = 'YOU WIN BABY !!';
        const thelOoser = 'YOU LOOSE MY POULE !!';
        const round = "round" + i + " : " + result;

        resultat = result == 0 ? theeQual : result == 1 ? thewInner : thelOoser;
        console.log(deBut + resultat + ' (' + round + ')');
    }
    final = score > (numberOfRounds / 2) ? "You win !!" : "You loose";
    console.log(final);
}