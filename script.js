const btn = document.querySelectorAll(".btn");
const result  = document.getElementById("result");
const playerScore = document.getElementById("player");
const computerScore = document.getElementById("computer");
const Player = document.getElementById("Pscore");
const Computer = document.getElementById("Cscore");
let Pscore = 0;
let Cscore = 0;

const compChoice=()=>{
    let choices = ["rock", "paper", "scissors"];
    let chosenChoice = Math.floor(Math.random(choices)*3);
    let computerChoice = choices[chosenChoice];
    return computerChoice;
};

const showWinner=(playerWin, btnID, comp)=>{
    if(playerWin){
        Pscore+=1;
        Player.innerText = Pscore;
        playerScore.innerText = `You have won! \n ${btnID} beats ${comp}`;
        playerScore.style.color = "green";
        playerScore.style.fontWeight = "bold";
    }else{
        Cscore+=1;
        Computer.innerText = Cscore;
        playerScore.innerText = `You lost... \n ${comp} beats ${btnID}`;
        playerScore.style.color = "red";
    };
};

const checkWinner = (btnID)=>{
    console.log("Player chose: ", btnID);
    let comp = compChoice();
    console.log("Computer chose: ", comp);
    if(btnID === comp){
        result.innerText = "It's a tie...";
    }else{
        result.innerText = `Player chose: ${btnID} \n Computer chose: ${comp}`;
        let playerWin = true;
        if(btnID === "Rock"){
            playerWin = comp === "paper" ? false : true;
        }else if(btnID === "Paper"){
            playerWin = comp === "scissors" ? false: true;
        }else{
            playerWin = comp === "rock" ? false : true;
        }
        showWinner(playerWin, btnID, comp);
    };
}

btn.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        let btnID = btn.getAttribute("id");
        checkWinner(btnID);
    });
});