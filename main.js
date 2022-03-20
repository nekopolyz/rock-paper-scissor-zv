function computerPlay(){
    let computer = ["rock","paper","scissor"];
    let randomize = computer[Math.floor(Math.random() * computer.length)];
    return randomize;
}

computerPlay()
console.log(computerPlay());



function playRound(playerSelection,computerSelection){
    if (playerSelection === computerSelection){
        return "tie";
    }

    if (playerSelection == "rock" && computerSelection == "paper"){
        return "You lost";
    }

    if (playerSelection == "rock" && computerSelection == "scissor"){
        return "You win";
    }

    if (playerSelection == "paper" && computerSelection == "rock"){
        return "You win";
    }

    if (playerSelection == "paper" && computerSelection == "scissor"){
        return "You lost";
    }

    if (playerSelection == "scissor" && computerSelection == "rock"){
        return "You lost";
    }

    if (playerSelection == "scissor" && computerSelection == "paper"){
        return "You win";
    }

}



const playerSelection = prompt("Choose").toLowerCase()

const computerSelection = computerPlay()




console.log(playRound(playerSelection, computerSelection));

function game(){
    for (let i =0; i<5; i++){
        const playerSelection = prompt("Choose").toLowerCase()
        const computerSelection = computerPlay()
        console.log(playRound(playerSelection,computerSelection));

    }
}


game()

