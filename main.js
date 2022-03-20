function computerPlay(){
    let computer = ["rock","paper","scissor"];
    let randomize = computer[Math.floor(Math.random() * computer.length)];
    return randomize
}

computerPlay()