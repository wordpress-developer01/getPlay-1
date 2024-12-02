// Example function that plays a single round
function playRound(playerSelection) {
   const choices = ["rock", "paper", "scissors"];
   const computerSelection = choices[Math.floor(Math.random() * choices.length)];
   const resultsDiv = document.getElementById("results");

   // Determine the result
   let resultMessage;
   if (playerSelection === computerSelection) {
       resultMessage = "It's a tie!";
   } else if (
       (playerSelection === "rock" && computerSelection === "scissors") ||
       (playerSelection === "paper" && computerSelection === "rock") ||
       (playerSelection === "scissors" && computerSelection === "paper")
   ) {
       resultMessage = "You win!";
   } else {
       resultMessage = "You lose!";
   }

   // Update the results div with the results
   resultsDiv.innerHTML = `
       <p><strong>Player:</strong> ${playerSelection}</p>
       <p><strong>Computer:</strong> ${computerSelection}</p>
       <p><strong>Result:</strong> ${resultMessage}</p>
   `;
}

// Adding event listeners to buttons
document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
