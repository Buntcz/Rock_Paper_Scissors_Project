const choices = ["rock", "paper", "scissors"];
const winners = [];

function game(){
    for( let i = 1; i <= 5; i++){
        playRound();
    }
    logWins();
}

function playRound() {
     const playerSelection = playerChoice();
     const computerSelection = computerChoice();
     const winner = checkWinner(playerSelection,computerSelection)
     winners.push(winner)
}

function playerChoice () {
    let input = prompt("Type Rock, Paper or Scsissors");
    
    while(input == null) {
        input = prompt("Type Rock,Paper or scissors")
    }
    input = input.toLowerCase();
    let check = validate(input)
    while(check == false){
      input =  prompt("Type Rock,Paper or Scissors");
      while(input == null) {
        input = prompt("Type Rock,Paper or scissors")
    }
      input = input.toLowerCase()
      check = validate(input)
    }
    return input;
}

function computerChoice() {
    return choices [Math.floor(Math.random() * choices.length)];
}

function validate(choice) {
    return choices.includes(choice)
}

function checkWinner(ChoiceP, ChoiceC) {
    if(ChoiceP === ChoiceC){
        return "Tie"
    } else if(
    (ChoiceP === "rock" && ChoiceC == "scissors") || 
    (ChoiceP === "paper" && ChoiceC ==="rock") || 
    (ChoiceP === "scissors" && ChoiceC === "paper"))  {
        return "Player"
    } else {
        return "Computer"
    }
}

function logWins() {
console.log(winners)
}

game();