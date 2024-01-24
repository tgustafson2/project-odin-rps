class RPS{

    #playerScore;
    #computerScore;    

    constructor(){
        this.#playerScore = 0;
        this.#computerScore = 0;
    }

    getComputerChoice(){
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

    playRound(playerSelection, computerSelection){
        if(this.#playerScore>=5 || this.#computerScore>=5)return;
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerSelection.toLowerCase();
        if(playerSelection == "rock" && computerSelection == "scissors"){
            this.#playerScore++;
        }
        else if(playerSelection == "rock" && computerSelection == "paper"){
            this.#computerScore++;
        }
        else if(playerSelection == "scissors" && computerSelection == "rock"){
            this.#computerScore++;
        }
        else if(playerSelection == "scissors" && computerSelection == "paper"){
            this.#playerScore++;
        }
        else if(playerSelection == "paper" && computerSelection == "rock"){
            this.#playerScore++;
        }
        else if(playerSelection == "paper" && computerSelection == "scissors"){
            this.#computerScore++;
        }
        this.updateScore();

    
    }

    updateScore(){
        const gameCont = document.querySelector("#game-container");
        if(gameCont.childElementCount==1){
            const score = document.createElement("p");
            score.classList.add("game-score");
            if(this.#computerScore>this.#playerScore){
                score.textContent = this.#computerScore + "-" + this.#playerScore
                 + " Computer";
            }
            else if(this.#playerScore>this.#computerScore){
                score.textContent = this.#playerScore + "-" +this.#computerScore
                + " Player";
            }
            else{
                score.textContent = "0-0 Tied";
            }
            gameCont.appendChild(score);
        }
        else{
            const score = document.querySelector(".game-score");
            if(this.#computerScore>this.#playerScore){
                if(this.#computerScore==5){
                    score.textContent = "Computer Wins";
                    this.addReset();
                }
                else{
                    score.textContent = this.#computerScore + "-" + this.#playerScore
                     + " Computer";
                }
            }
            else if(this.#playerScore>this.#computerScore){
                if(this.#playerScore==5){
                    score.textContent = "Player Wins";
                    this.addReset();
                }
                else{
                    score.textContent = this.#playerScore + "-" +this.#computerScore
                    + " Player";
                }
            }
            else{
                score.textContent = this.#computerScore + "-" + this.#playerScore
                + " Tied";
            }
            

        }
    }

    getComputerScore(){
        return this.#computerScore;
    }

    getPlayerScore(){
        return this.#playerScore;
    }

    resetGame(){
        this.#computerScore = 0;
        this.#playerScore = 0;
        const score = document.querySelector(".game-score");
        score.remove();
        const resetBtn = document.querySelector("#reset-btn");
        resetBtn.remove();
    }

    addReset(){
        const game = document.querySelector("#game-container");
        const resetBtn = document.createElement("button");
        resetBtn.id = "reset-btn";
        resetBtn.textContent = "Reset";
        resetBtn.addEventListener("click", () => {
            this.resetGame();
        });
        game.appendChild(resetBtn);
    }
    


}



const RPSGAME = new RPS();

// const rockBtn = document.querySelector("#rock");
// const paperBtn = document.querySelector("#paper");
// const scissorsBtn = document.querySelector("#scissors");
const buttons = document.querySelectorAll(".play-buttons button");

buttons.forEach((button) =>{
    button.addEventListener("click", () => {
        RPSGAME.playRound(button.textContent, RPSGAME.getComputerChoice());
    });
});




