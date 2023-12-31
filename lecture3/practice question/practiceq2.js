// Let's Practice
// Qs2.
// Create a game where you start with any random game number. Ask the user to keep
// guessing the game number until the user enters correct value.

//Practice Qs2
let gameNum = 25;
let userNum = prompt("Guess the game number : ");
while(userNum != gameNum) {
    // game
    userNum=prompt("You entered the wrong number, Guess again: ");
}

console.log("Congratulations, you entered the right number!");