result = document.querySelector('.display-result')
playerScore = document.querySelector('.display-playerScore')
computerScore = document.querySelector('.display-computerScore')

function computerPlay() {
    let computer = ["rock", "paper", "scissor"];
    let randomize = computer[Math.floor(Math.random() * computer.length)];
    return randomize;
}


let PlayerScore = 0;
let ComputerScore = 0;


function play(e) {
    player = e.target.id
    let computer = computerPlay()
    playRound(player, computer)
    console.log(`${player} << playerSelected`);
    console.log(computer);



}



function playRound(playerSelection, computerSelection) {

    
    
    if (playerSelection === computerSelection) {
        result.textContent = "TIE";
    }

    else if (playerSelection == "rock" && computerSelection == "paper") {
        ComputerScore += 1
        computerScore.textContent = `${ComputerScore}`;
        result.textContent = "COMPUTER WIN";
    }

    else if (playerSelection == "rock" && computerSelection == "scissor") {
        PlayerScore += 1
        playerScore.textContent = `${PlayerScore}`
        result.textContent = `YOU WIN`;
    }

    else if (playerSelection == "paper" && computerSelection == "rock") {
        PlayerScore += 1
        playerScore.textContent = `${PlayerScore}`
        result.textContent = "YOU WIN";
    }

    else if (playerSelection == "paper" && computerSelection == "scissor") {
        ComputerScore += 1
        computerScore.textContent = `${ComputerScore}`;
        result.textContent = "COMPUTER  WIN";
    }

    else if (playerSelection == "scissor" && computerSelection == "rock") {
        ComputerScore += 1
        computerScore.textContent = `${ComputerScore}`;
        result.textContent = "COMPUTER  WIN";
    }

    else if (playerSelection == "scissor" && computerSelection == "paper") {
        PlayerScore += 1
        playerScore.textContent = `${PlayerScore}`
        result.textContent = "YOU WIN";
    }
    gameOver()





}




function disableBtn() {
    buttons.forEach(button => {
        button.disabled = true
    })
}


function gameOver() {

    if (PlayerScore === 5) {
        playerScore.textContent = "YOU WON"
        disableBtn()


    } else if (ComputerScore === 5) {
        computerScore.textContent = "COMPUTER WON "
        disableBtn()


    }

}




buttons = document.querySelectorAll('button')
buttons.forEach(button => button.addEventListener('click', play));



// function game(){
//     for (let i =0; i<5; i++){

        // const playerSelection = prompt("Choose").toLowerCase()
        // const computerSelection = computerPlay()
        // console.log(playRound(playerSelection,computerSelection));

//     }
// }

// game()

