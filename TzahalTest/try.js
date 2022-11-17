const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);


function RockPaperScissors (playerSelection){
    computerSelection = getComputerChoice();
    playerSelection = playerSelection.toUpperCase();
    if(computerSelection == "Rock" && playerSelection == "SCISSORS"){
        console.log("You Lose! Rock beats Scissors");
        return "c";
    }
    else if(computerSelection == "Paper" && playerSelection == "ROCK"){
        console.log("You Lose! Paper beats Rock");
        return "c";
    }
    else if (computerSelection == "Scissors" && playerSelection == "PAPER"){
        console.log("You Lose! Scissors beats Paper");
        return "c";
    }
    else if(computerSelection == "Scissors" && playerSelection == "ROCK"){
        console.log("You Win! Rock beats Scissors");
        return "p";
    }
    else if(computerSelection == "Rock" && playerSelection == "PAPER"){
        console.log("You Win! Paper beats Rock");
        return "p";
    }
    else if (computerSelection == "Paper" && playerSelection == "SCISSORS"){
        console.log("You Win! Scissors beats Paper");
        return "p";
    }
    else{
        console.log("Draw");
        return "d";
    }
}



function game(){
    playerPoints = 0;
    computerPoints = 0;
    for(i = 0; i<5; i++){
        playerSelection = prompt("Enter a move");
        result = RockPaperScissors(playerSelection);
        if(result == "p"){
            playerPoints++;
        }
        if(result == "c"){
            computerPoints++;
        }
        else{
            playerPoints++;
            computerPoints++;
        }
    }
    if(playerPoints > computerPoints){
        console.log("You win this round!!!");
    }
    else if(computerPoints > playerPoints){
        console.log("You lose this round")
    }
    else{
        console.log("It is a draw!")
    }
}