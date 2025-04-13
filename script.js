function computerInput(){
    const computerRes = Math.floor(Math.random() * 3);
    showComputerIm(computerRes);
    return computerRes;
}

function getResult(player){
    const computer = computerInput();
    //console.log(computer,player);
    if (player == computer){
        drawGame();
    } else if (player == (computer+1)%3){
        playerWins();
    } else {
        computerWins();
    }
}

function drawGame(){
    document.getElementById("feedback").textContent = "It's a draw !";
}

function playerWins(){
    document.getElementById("feedback").textContent = "You win !";
}

function computerWins(){
    document.getElementById("feedback").textContent = "Computer wins !";
}

function getImageName(number,isPlayer = false){
    let imagename = '';
    if (number == 0){
        imagename = "rock";
    } else if (number == 1){
        imagename = "paper";
    } else {
        imagename = "scissors";
    }
    if (isPlayer){
        imagename+= "Mirrored";
    }
    imagename+=".png";
    return imagename;
}

function showComputerIm(num){
    document.getElementById("computerImage").innerHTML = '';
    const im = document.createElement('img');
    im.classList.add("imgcontainer");
    im.src = getImageName(num);
    document.getElementById("computerImage").appendChild(im);
}

function showPlayerIm(number){
    document.getElementById("playerImage").innerHTML = '';
    const pim = document.createElement('img');
    pim.classList.add("imgcontainer");
    pim.src = getImageName(number,true);
    document.getElementById("playerImage").appendChild(pim);
}

function playRock(){
    showPlayerIm(0);
    getResult(0);
}

function playPaper(){
    showPlayerIm(1);
    getResult(1);
}

function playScissors(){
    showPlayerIm(2);
    getResult(2);
}


//Listeners
document.getElementById("rockButton").addEventListener('click',playRock);
document.getElementById('paperButton').addEventListener('click',playPaper);
document.getElementById('scissorsButton').addEventListener('click',playScissors);