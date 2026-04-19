const max = prompt("Enter the maximum number");
const ran = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");

while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }
    if(guess == ran){
        console.log("Congrats! you are right! random number was ", ran);
        break;
    }
    else{
        guess = prompt("your guess was wrong. please try again");
    }
}