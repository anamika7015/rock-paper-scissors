let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");

const compScorepara = document.querySelector("#comp-score");
const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];

   const randIdx = Math.floor(Math.random()*3);
   return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "game was draw .play again.";
    msg.style.backgroundColor = "#081b31";
};
const showWinner = (userWin) => {
if(userWin){
    userScore++;
    userScorepara.innerText = userScore;
    msg.innerText = "you win!";
    msg.style.backgroundColor = "green";
} else {
    compScore++;
    compScorepara.innerText = compScore;
    msg.innerText = "you lose";
    msg.style.backgroundColor = "red";
}
};

const playGame = (userChoice) => {

    //generate computer choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice) {
      drawGame();
    } else {
        let userWin = true;
        if (userChoice === "Rock") {
            //scissors, paper
        userWin = compChoice === "Paper" ? false : true;
         } else if(userChoice ==="Paper") {
            //rock,scissors
            userWin = compChoice === "Scissors" ? false : true;
        } else {
            //rock ,paper
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
    
const userChoice = choice.getAttribute("id");

playGame(userChoice);
    });
});