function getComputerChoice(){
    let choice = Math.ceil(Math.random()*3)
    switch (choice) {
        case 1:
            return 'Rock'
            break;
        case 2:
            return 'Paper'
            break;
        case 3:
            return 'Scissors'
            break;
        default:
            break;
    }
}

function getUserChoice(){
    let choice = prompt("Please enter Rock, Paper or Scissors")

    if(choice.toLowerCase(choice)!='rock' && choice.toLowerCase(choice)!='paper' && choice.toLowerCase(choice)!='scissors'){
        console.log("Invalid selection")
        return getUserChoice()
    }
    return choice
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    if(playerSelection == "rock" && computerSelection == "scissors"){
        return "You win! Rock beats Scissors"
    }
    else if(playerSelection == "rock" && computerSelection == "paper"){
        return "You lose! Paper beats Rock"
    }
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        return "You lose! Rock beats Scissors"
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        return "You win! Scissors beats Paper"
    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        return "You Win! Paper beats Rock"
    }
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        return "You lose! Scissors beats Paper"
    }
    else{
        console.log("It's a tie")
        return playRound(getComputerChoice(),getUserChoice())
    }

}

console.log(playRound(getComputerChoice(),getUserChoice()))