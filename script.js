let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");

let userScoreEle = document.querySelector("#MyScore");
let compScoreEle = document.querySelector("#CompScore");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
  };

  choices.forEach((choice) => {
    choice.addEventListener("click" , () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });

    const playGame = (userChoice) => {
    const compChoice = genCompChoice();
  
    if (userChoice === compChoice) 
    {
      msg.innerText = "Match was Draw. Play Again";
      userScoreEle.innerText = userScore;
      compScoreEle.innerText = compScore;
    } 
    else 
    {
      let userWin = true;
      if (userChoice === "rock") 
      {
        userWin = compChoice === "paper" ? false : true;
      } 
      else if (userChoice === "paper") 
      {
        userWin = compChoice === "scissors" ? false : true;
      }
     else 
     {
        userWin = compChoice === "rock" ? false : true;
      }
      showWinner(userWin, userChoice, compChoice);
    }
  };

  const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) 
    {
      userScore++;
      userScoreEle.innerText = userScore;
      msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
      msg.style.color = "green";
    } 
    else {
      compScore++;
      compScoreEle.innerText = compScore;
      msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
      msg.style.color = "red";
    }
  };
});
  


