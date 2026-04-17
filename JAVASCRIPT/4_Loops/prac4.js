let movie ="avatar";
let guess = prompt("Guess the movie name");

while((guess != movie) && (guess != "quit")){
    guess = prompt("Wrong guess, please try again");
}

if(guess == movie){
    console.log("Congrats!");
}
else{
    console.log("quit");
}