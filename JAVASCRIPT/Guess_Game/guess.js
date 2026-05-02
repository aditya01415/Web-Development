let num = prompt("Enter a number");
const random = Math.floor(Math.random() * num) + 1;
let guess = prompt("Guess the number");
while(true){
    if(guess == "quit") {
        console.log("You quit the game");
        break;
    }
    if(guess == random) {
        console.log("Congratulations! You guessed the number.");
        break;
    }
    else {
        guess = prompt("Wrong guess! Try again or type 'quit' to exit.");
    }
}
