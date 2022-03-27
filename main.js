result = document.querySelector('.result')
playerScore = document.querySelector('.playerScore')
computerScore = document.querySelector('.computerScore')

function computerPlay(){
    let computer = ["rock","paper","scissor"];
    let randomize = computer[Math.floor(Math.random() * computer.length)];
    return randomize;
}


let PlayerScore = 0
let ComputerScore = 0



function play(e){
    let player = e.textContent
    let computer = computerPlay()
    playRound(player,computer)
    console.log(`${player} << playerSelected`);
    console.log(computer);
    
}



function playRound(playerSelection,computerSelection){
    if (playerSelection === computerSelection){
        result.textContent ="tie";
    }

    if (playerSelection == "rock" && computerSelection == "paper"){
        ComputerScore += 1
        computerScore.textContent = `${ComputerScore}`;
    }

    if (playerSelection == "rock" && computerSelection == "scissor"){
        PlayerScore += 1
        playerScore.textContent =`${PlayerScore}`
        result.textContent = `You win`;
    }

    if (playerSelection == "paper" && computerSelection == "rock"){
        PlayerScore += 1
        playerScore.textContent =`${PlayerScore}`
        result.textContent =  "You win";
    }

    if (playerSelection == "paper" && computerSelection == "scissor"){
        ComputerScore += 1
        computerScore.textContent = `${ComputerScore}`;
    }

    if (playerSelection == "scissor" && computerSelection == "rock"){
        ComputerScore += 1
        computerScore.textContent = `${ComputerScore}`;
    }

    if (playerSelection == "scissor" && computerSelection == "paper"){
        PlayerScore += 1
        playerScore.textContent =`${PlayerScore}`
        result.textContent = "You win";
    }
    gameOver()
  

}

function gameOver(){
    if (PlayerScore >= 5){
        playerScore.textContent =`You won`
        return;
    } else if (ComputerScore >= 5){
        computerScore.textContent = "You won"
        return;
    }
}


// const playerSelection = "rock"
// const computerSelection = computerPlay()

// console.log(playRound(playerSelection, computerSelection));

buttons = document.querySelectorAll('button')
buttons.forEach(button => button.addEventListener('click', play));


// function game(){
//     for (let i =0; i<5; i++){
//         const playerSelection = prompt("Choose").toLowerCase()
//         const computerSelection = computerPlay()
//         console.log(playRound(playerSelection,computerSelection));

//     }
// }

// game()

