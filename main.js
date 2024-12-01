 function Game() {
 const choice1 = prompt("player1, choice number: ").toLowerCase();
 const choice2 = prompt("player2, choice number: ").toLowerCase();

 console.log("player1 choice: ", choice1);
 console.log("player2 choice:", choice2);

 if(choice1 === "rock" && choice2 === "paper") {
    console.log("player2 win");
 } else if(choice1 === "paper" && choice2 === "rock") {
    console.log("player1 win");
 } else if(choice1 === "scissors" && choice2 === "rock") {
    console.log("player2 win");
 } else if(choice1 === "rock" && choice2 === "scissors") {
    console.log("player1 win");
 } else if(choice1 === "paper" && choice2 === "scissors") {
    console.log("player2 win");
 } else if(choice1 === "scissors" && choice2 === "paper") {
    console.log("player1 win");
 } else { console.log("no win");}
 }

 Game();