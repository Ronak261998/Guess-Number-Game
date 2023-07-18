"use strict";

// console.log(document.querySelector(".between").textContent);
// document.querySelector(".number").textContent = 25;
// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //WHEN THERE IS NO INPUT
  if (!guess) {
    // document.querySelector(".message").textContent = "⛔ No Number";
    displayMessage("⛔ No Number");

    //WHEN YOU ARE WINNER
  } else if (secretNumber === guess) {
    // document.querySelector(".message").textContent = "🎉Yeah! You're Winner";
    displayMessage("🎉Yeah! You're Winner");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    // WHEN YOUR GUESS IS WRONG
  } else if (secretNumber !== guess) {
    if (score > 1) {
      //   document.querySelector(".message").textContent =
      //     secretNumber > guess ? "📉Too low" : "📈Too high";
      displayMessage(secretNumber > guess ? "📉Too low!" : "📈Too high!");

      score--;

      document.querySelector(".score").textContent = score;
    } else {
      //   document.querySelector(".message").textContent =
      //     "💥🤬You lost the game! Click on start again Button!😁";
      displayMessage("💥🤬You lost the game! Click on start again Button!😁");
      document.querySelector(".score").textContent = 0;
    }
  }

  //   //WHEN YOUR NUMBER TOO LOW
  //   else if (secretNumber > guess) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "📉Too low";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent =
  //         "💥🤬You lost the game! Click on start again Button!😁";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //     //WHEN YOUR NUMBER TOO HIGH
  //   } else if (secretNumber < guess) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "📈Too high";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent =
  //         "💥🤬You lost the game! Click on start again Button!😁";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   }
});

document.querySelector(".again").addEventListener("click", () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").textContent = "?";
  //   document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
